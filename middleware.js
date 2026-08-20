import { NextResponse } from 'next/server';

// Next only loads middleware from the project root (or src/), which is why this
// previously sat unused at app/middleware.jsx.
//
// Security headers are NOT set here — next.config.mjs owns them, so there is a
// single definition and the two cannot drift apart. This file handles the work
// that only middleware can do: rate limiting, request validation, and tagging
// each request with an id.

const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // per IP per window
const MAX_BODY_BYTES = 1024 * 1024; // 1MB

// Per-instance only. On serverless each instance keeps its own map, so this is a
// cheap guard against bursts, not a global quota.
const ipRequestMap = new Map();

function prune(now) {
  for (const [ip, data] of ipRequestMap) {
    if (now - data.timestamp > RATE_LIMIT_DURATION) {
      ipRequestMap.delete(ip);
    }
  }
}

function clientIp(request) {
  // NextRequest.ip was removed in Next 15, so read the forwarded headers.
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export function middleware(request) {
  const requestId = crypto.randomUUID();
  const now = Date.now();

  // Reject traversal attempts before doing any other work.
  const path = request.nextUrl.pathname;
  const decoded = (() => {
    try {
      return decodeURIComponent(path);
    } catch {
      return path;
    }
  })();
  if (decoded.includes('../') || decoded.includes('..\\')) {
    return new NextResponse(null, {
      status: 400,
      headers: { 'X-Request-ID': requestId },
    });
  }

  const ip = clientIp(request);
  if (ip !== 'unknown') {
    if (ipRequestMap.size > 5000) prune(now);

    const data = ipRequestMap.get(ip) ?? { count: 0, timestamp: now };
    if (now - data.timestamp > RATE_LIMIT_DURATION) {
      data.count = 0;
      data.timestamp = now;
    }
    data.count += 1;
    ipRequestMap.set(ip, data);

    if (data.count > MAX_REQUESTS) {
      return new NextResponse(null, {
        status: 429,
        headers: {
          'Retry-After': '60',
          'X-Request-ID': requestId,
        },
      });
    }
  }

  if (request.method === 'POST') {
    const contentLength = Number.parseInt(
      request.headers.get('content-length') ?? '0',
      10
    );
    if (contentLength > MAX_BODY_BYTES) {
      return new NextResponse(null, {
        status: 413,
        headers: { 'X-Request-ID': requestId },
      });
    }

    if (request.nextUrl.pathname.startsWith('/api/')) {
      const contentType = request.headers.get('content-type') ?? '';
      const allowed =
        contentType.includes('application/json') ||
        contentType.includes('multipart/form-data') ||
        contentType.includes('application/x-www-form-urlencoded');
      if (!allowed) {
        return new NextResponse(null, {
          status: 415,
          headers: { 'X-Request-ID': requestId },
        });
      }
    }
  }

  const response = NextResponse.next();
  response.headers.set('X-Request-ID', requestId);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets/).*)'],
};
