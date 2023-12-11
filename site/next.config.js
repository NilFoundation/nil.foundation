/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['http://159.69.210.153:1337'],
  },

  webpack: config => {
    return config;
  },

  redirects: async () => {
    return [
      {
        source: '/careers/jobs/',
        destination: '/careers/jobs/:jobId',
        has: [
          {
            type: 'query',
            key: 'jobId',
          },
        ],
        permanent: false,
      }
    ];
  }
};

module.exports = nextConfig;