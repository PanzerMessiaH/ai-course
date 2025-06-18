import Database from 'better-sqlite3';
import { join } from 'path';
import bcrypt from 'bcryptjs';

// Database types
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  experience?: string;
  interests?: string;
  registrationDate: string;
  source: string;
}

export interface Admin {
  id: number;
  username: string;
  passwordHash: string;
  lastLogin?: string;
  createdAt: string;
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  experience?: string;
  interests?: string;
  source?: string;
}

// Database connection
let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    try {
      // Use /tmp directory in serverless environments (Vercel)
      const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
      const dbPath = isServerless 
        ? '/tmp/course-registrations.db'
        : join(process.cwd(), 'course-registrations.db');
      
      console.log(`Initializing database at: ${dbPath}`);
      
      db = new Database(dbPath);
      
      // Enable WAL mode for better performance (if supported)
      try {
        db.pragma('journal_mode = WAL');
      } catch (walError) {
        console.warn('WAL mode not supported, using default journal mode:', walError instanceof Error ? walError.message : 'Unknown error');
      }
      
      // Initialize database schema
      initializeDatabase(db);
      
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw new Error(`Database initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  return db;
}

function initializeDatabase(database: Database.Database) {
  // Create users table
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone TEXT,
      company TEXT,
      jobTitle TEXT,
      experience TEXT,
      interests TEXT,
      registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
      source TEXT DEFAULT 'website'
    )
  `;

  // Create admins table
  const createAdminsTable = `
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      passwordHash TEXT NOT NULL,
      lastLogin DATETIME,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create indexes for performance
  const createEmailIndex = `
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
  `;

  const createRegistrationDateIndex = `
    CREATE INDEX IF NOT EXISTS idx_users_registration_date ON users(registrationDate)
  `;

  const createUsernameIndex = `
    CREATE INDEX IF NOT EXISTS idx_admins_username ON admins(username)
  `;

  try {
    // Execute schema creation
    database.exec(createUsersTable);
    database.exec(createAdminsTable);
    database.exec(createEmailIndex);
    database.exec(createRegistrationDateIndex);
    database.exec(createUsernameIndex);

    console.log('Database schema initialized successfully');
    
    // Create default admin user if none exists
    createDefaultAdmin(database);
  } catch (error) {
    console.error('Error initializing database schema:', error);
    throw error;
  }
}

function createDefaultAdmin(database: Database.Database) {
  try {
    const checkAdmin = database.prepare('SELECT COUNT(*) as count FROM admins').get() as { count: number };
    
    if (checkAdmin.count === 0) {
      const defaultPassword = 'admin123'; // Should be changed in production
      const hashedPassword = bcrypt.hashSync(defaultPassword, 12);
      
      const insertAdmin = database.prepare(`
        INSERT INTO admins (username, passwordHash)
        VALUES (?, ?)
      `);
      
      insertAdmin.run('admin', hashedPassword);
      console.log('Default admin user created (username: admin, password: admin123)');
      console.log('⚠️  IMPORTANT: Change the default password in production!');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
    // Don't throw here, as this is not critical for user registration
  }
}

// User database operations
export class UserRepository {
  private db: Database.Database;
  private insertUserStmt: Database.Statement;
  private getUserByEmailStmt: Database.Statement;
  private getAllUsersStmt: Database.Statement;
  private getUserByIdStmt: Database.Statement;
  private getUserCountStmt: Database.Statement;

  constructor() {
    this.db = getDatabase();
    
    try {
      // Prepare statements for better performance
      this.insertUserStmt = this.db.prepare(`
        INSERT INTO users (firstName, lastName, email, phone, company, jobTitle, experience, interests, source)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      
      this.getUserByEmailStmt = this.db.prepare('SELECT * FROM users WHERE email = ?');
      this.getAllUsersStmt = this.db.prepare('SELECT * FROM users ORDER BY registrationDate DESC');
      this.getUserByIdStmt = this.db.prepare('SELECT * FROM users WHERE id = ?');
      this.getUserCountStmt = this.db.prepare('SELECT COUNT(*) as count FROM users');
    } catch (error) {
      console.error('Error preparing database statements:', error);
      throw error;
    }
  }

  async createUser(userData: NewUser): Promise<User> {
    try {
      // Check if user already exists
      const existingUser = this.getUserByEmailStmt.get(userData.email) as User | undefined;
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Insert new user
      const result = this.insertUserStmt.run(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.phone || null,
        userData.company || null,
        userData.jobTitle || null,
        userData.experience || null,
        userData.interests || null,
        userData.source || 'website'
      );

      // Return the created user
      const newUser = this.getUserByIdStmt.get(result.lastInsertRowid) as User;
      if (!newUser) {
        throw new Error('Failed to retrieve created user');
      }
      
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    console.log(`Getting user by email: ${email}`);
    try {
      const user = this.getUserByEmailStmt.get(email) as User | undefined;
      return user || null;
    } catch (error) {
      console.error('Error getting user by email:', error);
      throw error;
    }
  }

  async getAllUsers(): Promise<User[]> {
    console.log('Getting all users for admin dashboard');
    try {
      const users = this.db.prepare('SELECT * FROM users ORDER BY registrationDate DESC').all() as User[];
      console.log(`Retrieved ${users.length} users`);
      return users;
    } catch (error) {
      console.error('Error getting all users:', error);
      throw error;
    }
  }

  async getUserCount(): Promise<number> {
    console.log('Getting user count');
    try {
      const result = this.db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
      return result.count;
    } catch (error) {
      console.error('Error getting user count:', error);
      throw error;
    }
  }
}

// Admin database operations
export class AdminRepository {
  private db: Database.Database;
  private getAdminByUsernameStmt: Database.Statement;
  private updateLastLoginStmt: Database.Statement;

  constructor() {
    this.db = getDatabase();
    
    this.getAdminByUsernameStmt = this.db.prepare('SELECT * FROM admins WHERE username = ?');
    this.updateLastLoginStmt = this.db.prepare('UPDATE admins SET lastLogin = CURRENT_TIMESTAMP WHERE id = ?');
  }

  async getAdminByUsername(username: string): Promise<Admin | null> {
    try {
      const admin = this.getAdminByUsernameStmt.get(username) as Admin | undefined;
      return admin || null;
    } catch (error) {
      console.error('Error getting admin by username:', error);
      throw error;
    }
  }

  async updateLastLogin(adminId: number): Promise<void> {
    try {
      this.updateLastLoginStmt.run(adminId);
    } catch (error) {
      console.error('Error updating last login:', error);
      throw error;
    }
  }
}

// Close database connection (for cleanup)
export function closeDatabase() {
  if (db) {
    try {
      db.close();
      db = null;
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error closing database:', error);
    }
  }
} 