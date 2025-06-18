import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('Test cookie GET - checking cookies');
  
  const allCookies = request.cookies.getAll();
  console.log('All cookies received:', allCookies);
  
  const testCookie = request.cookies.get('test-cookie')?.value;
  console.log('Test cookie value:', testCookie);

  return NextResponse.json({
    message: 'Cookie test GET',
    cookies: allCookies,
    testCookie: testCookie || 'not found'
  });
}

export async function POST() {
  console.log('Test cookie POST - setting cookie');
  
  const response = NextResponse.json({
    message: 'Test cookie set successfully'
  });

  // Set a test cookie
  response.cookies.set('test-cookie', 'test-value-123', {
    httpOnly: true,
    secure: false, // Allow HTTP for localhost
    sameSite: 'lax',
    maxAge: 60 * 60, // 1 hour
    path: '/'
  });

  console.log('Test cookie set in response');
  return response;
} 