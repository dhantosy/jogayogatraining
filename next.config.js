/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/fun-diving',
        destination: '/',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
}

module.exports = nextConfig
