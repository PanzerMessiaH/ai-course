import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes that don't need auth
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/register') ||
    pathname.startsWith('/api/admin/login') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return NextResponse.next();
  }

  // Handle admin routes
  if (pathname.startsWith('/admin/') && pathname !== '/admin/login') {
    const sessionCookie = request.cookies.get('admin-session');
    
    if (!sessionCookie) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Handle admin API routes
  if (pathname.startsWith('/api/admin/') && pathname !== '/api/admin/login') {
    const sessionCookie = request.cookies.get('admin-session');
    
    if (!sessionCookie) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 