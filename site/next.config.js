/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['http://159.69.210.153:1337'],
  },
  

  webpack: config => {
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/uniswap/:path*',   // the URL you want externally
        destination: '/api/uniswap/:path*', // the actual API route
      },
    ]
  },
};

module.exports = nextConfig;
