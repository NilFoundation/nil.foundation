/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['http://159.69.210.153:1337'],
  },

  webpack: config => {
    return config;
  },
};

module.exports = nextConfig;
