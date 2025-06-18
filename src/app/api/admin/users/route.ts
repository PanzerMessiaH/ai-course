import { NextRequest, NextResponse } from 'next/server';
import { UserRepository } from '../../../../../lib/database';
import { verifyAdminSession } from '../../../../../lib/middleware';

export async function GET(request: NextRequest) {
  console.log('Admin users API called');

  try {
    // Verify admin authentication
    const authResult = await verifyAdminSession(request);
    if (!authResult.isAuthenticated) {
      return authResult.response!;
    }

    console.log(`Admin ${authResult.admin?.username} requesting user data`);

    // Get all users from database
    const userRepository = new UserRepository();
    const users = await userRepository.getAllUsers();

    console.log(`Retrieved ${users.length} users for admin dashboard`);

    // Transform users data for frontend
    const transformedUsers = users.map(user => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      company: user.company,
      jobTitle: user.jobTitle,
      location: '', // Not in database schema, set to empty
      experience: user.experience,
      interests: user.interests ? JSON.parse(user.interests) : [],
      goals: '', // Not in database schema, set to empty
      createdAt: user.registrationDate // Map registrationDate to createdAt for frontend
    }));

    return NextResponse.json(
      {
        message: 'Users retrieved successfully',
        users: transformedUsers,
        count: transformedUsers.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Admin users API error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to retrieve users',
        error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function POST() {
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
