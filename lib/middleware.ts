import { NextRequest, NextResponse } from 'next/server';
import { SessionManager } from './auth';

export interface AuthenticatedRequest extends NextRequest {
  admin?: {
    id: number;
    username: string;
  };
}

export async function verifyAdminSession(request: NextRequest): Promise<{
  isAuthenticated: boolean;
  admin?: { id: number; username: string };
  response?: NextResponse;
}> {
  try {
    // Debug: Log all cookies
    const allCookies = request.cookies.getAll();
    console.log('All cookies received:', allCookies.map(c => `${c.name}=${c.value?.substring(0, 10)}...`));
    
    // Get session cookie
    const sessionId = request.cookies.get('admin-session')?.value;

    console.log('Verifying admin session, sessionId:', sessionId ? `${sessionId.substring(0, 10)}...` : 'missing');

    if (!sessionId) {
      console.log('No session ID found');
      return {
        isAuthenticated: false,
        response: NextResponse.json(
          { message: 'Authentication required' },
          { status: 401 }
        )
      };
    }

    // Verify session
    const session = SessionManager.getSession(sessionId);
    console.log('Session lookup result:', session ? 'found' : 'not found');

    if (!session) {
      // Session expired or invalid
      console.log('Session expired or invalid');
      const response = NextResponse.json(
        { message: 'Session expired. Please login again.' },
        { status: 401 }
      );
      
      // Clear invalid session cookie
      response.cookies.delete('admin-session');
      
      return {
        isAuthenticated: false,
        response
      };
    }

    // Extend session if valid
    SessionManager.extendSession(sessionId);
    console.log('Session verified and extended for admin:', session.username);

    return {
      isAuthenticated: true,
      admin: {
        id: session.adminId,
        username: session.username
      }
    };

  } catch (error) {
    console.error('Session verification error:', error);
    return {
      isAuthenticated: false,
      response: NextResponse.json(
        { message: 'Authentication service error' },
        { status: 500 }
      )
    };
  }
}

export function requireAdminAuth(handler: (request: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const authResult = await verifyAdminSession(request);

    if (!authResult.isAuthenticated) {
      return authResult.response!;
    }

    // Add admin info to request
    const authenticatedRequest = request as AuthenticatedRequest;
    authenticatedRequest.admin = authResult.admin;

    return handler(authenticatedRequest);
  };
}

// Admin route protection middleware
export function adminMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip authentication for login page and API
  if (pathname === '/admin/login' || pathname.startsWith('/api/admin/login')) {
    return NextResponse.next();
  }

  // Check if this is a protected admin route
  if (pathname.startsWith('/admin/') || pathname.startsWith('/api/admin/')) {
    return verifyAdminSession(request).then(authResult => {
      if (!authResult.isAuthenticated) {
        // Redirect to login page for web routes
        if (pathname.startsWith('/admin/') && !pathname.startsWith('/api/admin/')) {
          return NextResponse.redirect(new URL('/admin/login', request.url));
        }
        // Return 401 for API routes
        return authResult.response!;
      }
      
      return NextResponse.next();
    });
  }

  return NextResponse.next();
}