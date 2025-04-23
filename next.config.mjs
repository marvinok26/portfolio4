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
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
            { 
              key: 'Content-Security-Policy', 
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://api.emailjs.com; frame-src 'none'; object-src 'none';"
            }
          ],
        },
      ]
    },
    async redirects() {
      return [
        // Add specific redirects if needed
        {
          source: '/api/old-route',
          destination: '/api/new-route',
          permanent: true,
        }
      ]
    },
    images: {
      domains: [], // Explicitly list allowed image domains
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.your-domain.com',
        },
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    serverRuntimeConfig: {
      // Server-side only config
      mySecret: process.env.MY_SECRET,
      emailServiceId: process.env.EMAIL_SERVICE_ID,
      emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
      emailUserId: process.env.EMAIL_USER_ID,
    },
    publicRuntimeConfig: {
      // Config available on both server and client
      emailPublicKey: process.env.EMAIL_PUBLIC_KEY,
    },
    experimental: {
      // Enhanced security for server actions
      serverActions: {
        allowedOrigins: ['localhost:3000', 'your-production-domain.com'], // Update with your actual domains
      },
      // Enable more modern JS features
      modularizeImports: {
        'react-icons': {
          transform: 'react-icons/{{path}}',
        },
      },
    },
    // Output as standalone for better security
    output: 'standalone',
  };
  
  export default nextConfig;