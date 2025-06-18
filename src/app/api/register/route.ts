import { NextRequest, NextResponse } from 'next/server';
import { userRegistrationSchema, InputSanitizer, RateLimiter } from '../../../../lib/auth';
import { UserRepository } from '../../../../lib/database';

export async function POST(request: NextRequest) {
  console.log('Registration API called');
  
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIP = forwarded ? forwarded.split(',')[0] : 
                     request.headers.get('x-real-ip') || 
                     '127.0.0.1';

    console.log(`Registration attempt from IP: ${clientIP}`);

    // Check rate limit
    const rateLimit = RateLimiter.checkRateLimit(`register:${clientIP}`);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { 
          message: 'Too many registration attempts. Please try again later.',
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
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body parsed successfully');
    
    // Sanitize input data
    const sanitizedData = {
      firstName: InputSanitizer.sanitizeString(body.firstName),
      lastName: InputSanitizer.sanitizeString(body.lastName),
      email: InputSanitizer.sanitizeEmail(body.email),
      phone: body.phone ? InputSanitizer.sanitizePhone(body.phone) : undefined,
      company: body.company ? InputSanitizer.sanitizeString(body.company) : undefined,
      jobTitle: body.jobTitle ? InputSanitizer.sanitizeString(body.jobTitle) : undefined,
      experience: body.experience,
      interests: body.interests ? InputSanitizer.sanitizeString(body.interests) : undefined,
      source: body.source ? InputSanitizer.sanitizeString(body.source) : undefined
    };

    console.log('Data sanitized successfully');

    // Validate with Zod schema
    const validationResult = userRegistrationSchema.safeParse(sanitizedData);
    
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error);
      return NextResponse.json(
        { 
          message: 'Validation failed',
          errors: validationResult.error.format()
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    console.log('Data validation passed');

    // Create user repository and save to database
    console.log('Initializing user repository...');
    
    try {
      const userRepository = new UserRepository();
      console.log('User repository initialized successfully');
      
      const newUser = await userRepository.createUser({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        jobTitle: validatedData.jobTitle,
        experience: validatedData.experience,
        interests: validatedData.interests,
        source: validatedData.source || 'website'
      });

      console.log(`New user registered successfully: ${newUser.email} (ID: ${newUser.id})`);

      // Return success response (without exposing user ID or sensitive data)
      return NextResponse.json(
        {
          message: 'Registration successful',
          user: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
          }
        },
        { 
          status: 201,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      );

    } catch (dbError) {
      console.error('Database error during registration:', dbError);
      
      // Check if it's a duplicate email error
      if (dbError instanceof Error && dbError.message.includes('already exists')) {
        return NextResponse.json(
          { message: 'An account with this email address already exists' },
          { status: 409 }
        );
      }

      // Generic database error
      return NextResponse.json(
        { 
          message: 'Registration failed due to database error. Please try again later.',
          error: process.env.NODE_ENV === 'development' ? dbError instanceof Error ? dbError.message : 'Unknown database error' : undefined
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Registration API error:', error);
    
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

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
} 