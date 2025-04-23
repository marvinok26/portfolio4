/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    httpAgentOptions: {
      keepAlive: false,
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-DNS-Prefetch-Control', value: 'on' },
            { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
            { key: 'X-XSS-Protection', value: '1; mode=block' },
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { 
              key: 'Content-Security-Policy', 
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';"
            }
          ],
        },
      ]
    },
    async redirects() {
      return [
        // Add any specific redirects if needed
      ]
    },
    images: {
      domains: [], // Explicitly list allowed image domains
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    serverRuntimeConfig: {
      // Server-side only config
      mySecret: process.env.MY_SECRET,
    },
    publicRuntimeConfig: {
      // Config available on both server and client
    },
    experimental: {
      // Enhanced security for server actions
      serverActions: {
        allowedOrigins: ['localhost:3000'], // Update with your actual domains
      },
    },
  };
  
  export default nextConfig;