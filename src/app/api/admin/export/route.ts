import { NextRequest, NextResponse } from 'next/server';
import { UserRepository } from '../../../../../lib/database';
import { verifyAdminSession } from '../../../../../lib/middleware';

export async function GET(request: NextRequest) {
  console.log('Admin export API called');

  try {
    // Verify admin authentication
    const authResult = await verifyAdminSession(request);
    if (!authResult.isAuthenticated) {
      return authResult.response!;
    }

    console.log(`Admin ${authResult.admin?.username} requesting data export`);

    // Get all users from database
    const userRepository = new UserRepository();
    const users = await userRepository.getAllUsers();

    console.log(`Exporting ${users.length} user records`);

    // Create CSV header
    const csvHeaders = [
      'ID',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Company',
      'Job Title',
      'Experience Level',
      'Interests',
      'Registration Date',
      'Registration Time'
    ];

    // Convert users to CSV rows
    const csvRows = users.map(user => {
      const registrationDate = new Date(user.registrationDate);
      const interests = user.interests ? JSON.parse(user.interests).join('; ') : '';
      
      return [
        user.id.toString(),
        user.firstName || '',
        user.lastName || '',
        user.email || '',
        user.phone || '',
        user.company || '',
        user.jobTitle || '',
        user.experience || '',
        interests,
        registrationDate.toLocaleDateString(),
        registrationDate.toLocaleTimeString()
      ].map(field => `"${field.replace(/"/g, '""')}"`); // Escape quotes and wrap in quotes
    });

    // Combine header and rows
    const csvContent = [
      csvHeaders.map(header => `"${header}"`).join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');

    // Create response with CSV content
    const response = new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="course-registrations-${new Date().toISOString().split('T')[0]}.csv"`,
        'Cache-Control': 'no-cache'
      }
    });

    console.log('CSV export generated successfully');
    return response;

  } catch (error) {
    console.error('Admin export API error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to export data',
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