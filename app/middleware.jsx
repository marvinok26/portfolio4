import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Simple in-memory rate limiting
// In production, use a more robust solution like Redis
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // 60 requests per minute
const ipRequestMap = new Map();

// Clean up expired rate limit entries
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipRequestMap.entries()) {
    if (now - data.timestamp > RATE_LIMIT_DURATION) {
      ipRequestMap.delete(ip);
    }
  }
}, 60000); // Clean up every minute

export function middleware(request) {
  // Generate a unique request ID for tracking
  const requestId = uuidv4();

  // Get client IP address
  const ip = request.ip ?? 
             request.headers.get('x-forwarded-for') ?? 
             request.headers.get('x-real-ip') ?? 
             'unknown';
  
  // Basic rate limiting
  if (ip !== 'unknown') {
    const now = Date.now();
    const requestData = ipRequestMap.get(ip) || { count: 0, timestamp: now };
    
    // Reset count if time window has passed
    if (now - requestData.timestamp > RATE_LIMIT_DURATION) {
      requestData.count = 0;
      requestData.timestamp = now;
    }
    
    // Increment request count
    requestData.count += 1;
    ipRequestMap.set(ip, requestData);
    
    // Check if rate limit exceeded
    if (requestData.count > MAX_REQUESTS) {
      return new NextResponse(null, {
        status: 429,
        statusText: 'Too Many Requests',
        headers: {
          'Retry-After': '60',
          'X-Request-ID': requestId
        }
      });
    }
  }

  // Input validation for POST requests
  if (request.method === 'POST') {
    // Check content length to prevent large payload attacks
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > 1024 * 1024) { // 1MB limit
      return new NextResponse(null, { 
        status: 413, 
        statusText: 'Payload Too Large',
        headers: {
          'X-Request-ID': requestId
        }
      });
    }
    
    // Check content type for API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
      const contentType = request.headers.get('content-type') || '';
      if (!contentType.includes('application/json') && 
          !contentType.includes('multipart/form-data') &&
          !contentType.includes('application/x-www-form-urlencoded')) {
        return new NextResponse(null, {
          status: 415,
          statusText: 'Unsupported Media Type',
          headers: {
            'X-Request-ID': requestId
          }
        });
      }
    }
  }

  // Path sanitization
  const path = request.nextUrl.pathname;
  if (path.includes('../') || path.includes('..\\') || 
      path.includes('%2e%2e%2f') || path.includes('%2e%2e/')) {
    return new NextResponse(null, { 
      status: 400, 
      statusText: 'Bad Request',
      headers: {
        'X-Request-ID': requestId
      }
    });
  }

  // Add security headers
  const response = NextResponse.next();
  
  // Basic security headers
  response.headers.set('X-Request-ID', requestId);
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  // Customize this based on your application's needs
  response.headers.set(
    'Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://cdn.emailjs.com https://cdnjs.cloudflare.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: blob:; " +
    "font-src 'self'; " +
    "connect-src 'self' https://api.emailjs.com; " +
    "frame-src 'none'; " +
    "object-src 'none';"
  );

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static files, images, and specific API routes
    '/((?!_next/static|_next/image|favicon.ico|assets/).*)',
  ],
};