import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Validation schemas
export const userRegistrationSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase(),
  
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[\d\s\-\(\)]+$/.test(val), {
      message: 'Please enter a valid phone number'
    }),
  
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  
  jobTitle: z.string()
    .max(100, 'Job title must be less than 100 characters')
    .optional(),
  
  experience: z.enum(['beginner', 'intermediate', 'advanced', 'expert'], {
    errorMap: () => ({ message: 'Please select your experience level' })
  }).optional(),
  
  interests: z.string()
    .max(500, 'Interests must be less than 500 characters')
    .optional(),
  
  source: z.string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
});

export const adminLoginSchema = z.object({
  username: z.string()
    .min(1, 'Username is required')
    .max(50, 'Username must be less than 50 characters'),
  
  password: z.string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  
  rememberMe: z.boolean().optional()
});

// Types derived from schemas
export type UserRegistrationData = z.infer<typeof userRegistrationSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;

// Password hashing utilities
export class PasswordManager {
  private static readonly SALT_ROUNDS = 12;

  static async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, this.SALT_ROUNDS);
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('Failed to hash password');
    }
  }

  static async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      console.error('Error verifying password:', error);
      throw new Error('Failed to verify password');
    }
  }

  static generateRandomPassword(length: number = 12): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
}

// Session management
export interface SessionData {
  adminId: number;
  username: string;
  loginTime: number;
  expiresAt: number;
}

export class SessionManager {
  private static readonly SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private static sessions = new Map<string, SessionData>();

  static createSession(adminId: number, username: string): string {
    const sessionId = this.generateSessionId();
    const now = Date.now();
    
    const sessionData: SessionData = {
      adminId,
      username,
      loginTime: now,
      expiresAt: now + this.SESSION_DURATION
    };

    this.sessions.set(sessionId, sessionData);
    console.log(`Session created: ${sessionId} for admin: ${username}, total sessions: ${this.sessions.size}`);
    return sessionId;
  }

  static getSession(sessionId: string): SessionData | null {
    console.log(`Looking up session: ${sessionId}, total sessions: ${this.sessions.size}`);
    const session = this.sessions.get(sessionId);
    
    if (!session) {
      console.log(`Session not found: ${sessionId}`);
      return null;
    }

    // Check if session has expired
    if (Date.now() > session.expiresAt) {
      console.log(`Session expired: ${sessionId}`);
      this.sessions.delete(sessionId);
      return null;
    }

    console.log(`Session found and valid: ${sessionId} for admin: ${session.username}`);
    return session;
  }

  static deleteSession(sessionId: string): void {
    const deleted = this.sessions.delete(sessionId);
    console.log(`Session deleted: ${sessionId}, success: ${deleted}`);
  }

  static extendSession(sessionId: string): boolean {
    const session = this.sessions.get(sessionId);
    
    if (!session) {
      console.log(`Cannot extend session, not found: ${sessionId}`);
      return false;
    }

    session.expiresAt = Date.now() + this.SESSION_DURATION;
    console.log(`Session extended: ${sessionId}`);
    return true;
  }

  static cleanup(): void {
    const now = Date.now();
    let cleaned = 0;
    for (const [sessionId, session] of this.sessions.entries()) {
      if (now > session.expiresAt) {
        this.sessions.delete(sessionId);
        cleaned++;
      }
    }
    if (cleaned > 0) {
      console.log(`Cleaned up ${cleaned} expired sessions`);
    }
  }

  private static generateSessionId(): string {
    return Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
}

// Rate limiting
export class RateLimiter {
  private static attempts = new Map<string, { count: number; resetTime: number }>();
  private static readonly MAX_ATTEMPTS = 5;
  private static readonly WINDOW_MS = 15 * 60 * 1000; // 15 minutes

  static checkRateLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const attempt = this.attempts.get(identifier);

    if (!attempt || now > attempt.resetTime) {
      // Reset or create new attempt record
      this.attempts.set(identifier, { count: 1, resetTime: now + this.WINDOW_MS });
      return { allowed: true, remaining: this.MAX_ATTEMPTS - 1, resetTime: now + this.WINDOW_MS };
    }

    if (attempt.count >= this.MAX_ATTEMPTS) {
      return { allowed: false, remaining: 0, resetTime: attempt.resetTime };
    }

    attempt.count++;
    return { 
      allowed: true, 
      remaining: this.MAX_ATTEMPTS - attempt.count, 
      resetTime: attempt.resetTime 
    };
  }

  static resetRateLimit(identifier: string): void {
    this.attempts.delete(identifier);
  }

  static cleanup(): void {
    const now = Date.now();
    for (const [identifier, attempt] of this.attempts.entries()) {
      if (now > attempt.resetTime) {
        this.attempts.delete(identifier);
      }
    }
  }
}

// Input sanitization
export class InputSanitizer {
  static sanitizeString(input: string): string {
    if (typeof input !== 'string') {
      return '';
    }

    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }

  static sanitizeEmail(email: string): string {
    return this.sanitizeString(email).toLowerCase();
  }

  static sanitizePhone(phone: string): string {
    if (!phone) return '';
    
    // Remove all non-digit characters except + - ( ) and spaces
    return phone.replace(/[^\d\+\-\(\)\s]/g, '').trim();
  }
}

// CSRF protection
export class CSRFProtection {
  private static tokens = new Map<string, number>();
  private static readonly TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hour

  static generateToken(): string {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    this.tokens.set(token, Date.now() + this.TOKEN_EXPIRY);
    return token;
  }

  static verifyToken(token: string): boolean {
    const expiry = this.tokens.get(token);
    
    if (!expiry) {
      return false;
    }

    if (Date.now() > expiry) {
      this.tokens.delete(token);
      return false;
    }

    // Token is valid, remove it (single use)
    this.tokens.delete(token);
    return true;
  }

  static cleanup(): void {
    const now = Date.now();
    for (const [token, expiry] of this.tokens.entries()) {
      if (now > expiry) {
        this.tokens.delete(token);
      }
    }
  }
}

// Periodic cleanup
setInterval(() => {
  SessionManager.cleanup();
  RateLimiter.cleanup();
  CSRFProtection.cleanup();
}, 60 * 60 * 1000); // Run cleanup every hour