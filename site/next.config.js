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
        source: '/careers/jobs',
        has: [
          {
            type: 'query',
            key: 'jobId',
          },
        ],
        destination: '/careers/jobs/:jobId',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
