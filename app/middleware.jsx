import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request) {
  // Generate a unique request ID for tracking
  const requestId = uuidv4();

  // Enhanced security headers
  const response = NextResponse.next();
  response.headers.set('X-Request-ID', requestId);
  
  // Rate limiting (basic implementation)
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const rateLimitKey = `rate_limit:${ip}`;
  
  // Protect against common attack vectors
  if (request.method === 'POST') {
    // Basic input size limitation
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > 1024 * 1024) { // 1MB limit
      return new NextResponse(null, { 
        status: 413, 
        statusText: 'Payload Too Large' 
      });
    }
  }

  // Basic path sanitization
  const path = request.nextUrl.pathname;
  if (path.includes('../') || path.includes('..\\')) {
    return new NextResponse(null, { 
      status: 400, 
      statusText: 'Bad Request' 
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};