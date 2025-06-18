import { NextRequest, NextResponse } from 'next/server';
import { adminLoginSchema, PasswordManager, SessionManager, RateLimiter } from '../../../../../lib/auth';
import { AdminRepository } from '../../../../../lib/database';

export async function POST(request: NextRequest) {
  console.log('Admin login API called');
  
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIP = forwarded ? forwarded.split(',')[0] : 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';

    console.log(`Admin login attempt from IP: ${clientIP}`);

    // Check rate limit (stricter for admin login)
    const rateLimit = RateLimiter.checkRateLimit(`admin-login:${clientIP}`);
    if (!rateLimit.allowed) {
      console.log(`Admin login rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { 
          message: 'Too many login attempts. Please try again later.',
          resetTime: rateLimit.resetTime
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      );
    }

    // Parse and validate request body
    console.log('Parsing admin login request...');
    const body = await request.json();
    
    // Validate with Zod schema
    const validationResult = adminLoginSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.log('Admin login validation failed:', validationResult.error);
      return NextResponse.json(
        { 
          message: 'Invalid login credentials format',
          errors: validationResult.error.format()
        },
        { status: 400 }
      );
    }

    const { username, password, rememberMe } = validationResult.data;
    console.log(`Admin login attempt for username: ${username}`);

    // Get admin from database
    try {
      const adminRepository = new AdminRepository();
      const admin = await adminRepository.getAdminByUsername(username);

      if (!admin) {
        console.log(`Admin not found: ${username}`);
        return NextResponse.json(
          { message: 'Invalid username or password' },
          { status: 401 }
        );
      }

      // Verify password
      const isPasswordValid = await PasswordManager.verifyPassword(password, admin.passwordHash);
      
      if (!isPasswordValid) {
        console.log(`Invalid password for admin: ${username}`);
        return NextResponse.json(
          { message: 'Invalid username or password' },
          { status: 401 }
        );
      }

      console.log(`Admin login successful: ${username} (ID: ${admin.id})`);

      // Create session
      const sessionId = SessionManager.createSession(admin.id, admin.username);
      
      // Update last login
      await adminRepository.updateLastLogin(admin.id);

      // Reset rate limit on successful login
      RateLimiter.resetRateLimit(`admin-login:${clientIP}`);

      // Create response with session cookie
      const sessionDuration = rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60; // 30 days or 1 day in seconds
      
      const response = NextResponse.json(
        {
          message: 'Login successful',
          admin: {
            id: admin.id,
            username: admin.username,
            lastLogin: admin.lastLogin
          }
        },
        { 
          status: 200,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      );

      // Set session cookie
      response.cookies.set('admin-session', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: sessionDuration,
        path: '/'
      });

      return response;

    } catch (dbError) {
      console.error('Database error during admin login:', dbError);
      return NextResponse.json(
        { 
          message: 'Authentication service temporarily unavailable',
          error: process.env.NODE_ENV === 'development' ? dbError instanceof Error ? dbError.message : 'Unknown database error' : undefined
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Admin login API error:', error);
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Generic server error
    return NextResponse.json(
      { 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: 500 }
    );
  }
}

// Admin logout endpoint
export async function DELETE(request: NextRequest) {
  console.log('Admin logout API called');
  
  try {
    const sessionId = request.cookies.get('admin-session')?.value;

    if (sessionId) {
      // Delete session from memory
      SessionManager.deleteSession(sessionId);
      console.log('Admin session deleted successfully');
    }

    // Create response and clear session cookie
    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );

    response.cookies.delete('admin-session');
    return response;

  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}