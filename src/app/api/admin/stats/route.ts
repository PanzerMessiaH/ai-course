import { NextRequest, NextResponse } from 'next/server';
import { UserRepository } from '../../../../../lib/database';
import { verifyAdminSession } from '../../../../../lib/middleware';

export async function GET(request: NextRequest) {
  console.log('Admin stats API called');

  try {
    // Verify admin authentication
    const authResult = await verifyAdminSession(request);
    if (!authResult.isAuthenticated) {
      return authResult.response!;
    }

    console.log(`Admin ${authResult.admin?.username} requesting stats data`);

    // Get statistics from database
    const userRepository = new UserRepository();
    const users = await userRepository.getAllUsers();

    // Calculate date ranges
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Calculate statistics
    const totalRegistrations = users.length;
    
    const todayRegistrations = users.filter(user => {
      const userDate = new Date(user.registrationDate);
      return userDate >= today;
    }).length;

    const weekRegistrations = users.filter(user => {
      const userDate = new Date(user.registrationDate);
      return userDate >= weekAgo;
    }).length;

    const monthRegistrations = users.filter(user => {
      const userDate = new Date(user.registrationDate);
      return userDate >= monthAgo;
    }).length;

    // Calculate top interests
    const interestCounts: { [key: string]: number } = {};
    users.forEach(user => {
      if (user.interests) {
        try {
          const interests = JSON.parse(user.interests);
          interests.forEach((interest: string) => {
            interestCounts[interest] = (interestCounts[interest] || 0) + 1;
          });
        } catch (error) {
          console.warn('Failed to parse interests for user:', user.id, error);
        }
      }
    });

    const topInterests = Object.entries(interestCounts)
      .map(([interest, count]) => ({ interest, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Calculate experience levels
    const experienceCounts: { [key: string]: number } = {};
    users.forEach(user => {
      if (user.experience) {
        experienceCounts[user.experience] = (experienceCounts[user.experience] || 0) + 1;
      }
    });

    const experienceLevels = Object.entries(experienceCounts)
      .map(([level, count]) => ({ level, count }))
      .sort((a, b) => b.count - a.count);

    const stats = {
      totalRegistrations,
      todayRegistrations,
      weekRegistrations,
      monthRegistrations,
      topInterests,
      experienceLevels
    };

    console.log('Generated stats:', stats);

    return NextResponse.json(
      {
        message: 'Statistics retrieved successfully',
        stats
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Admin stats API error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to retrieve statistics',
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