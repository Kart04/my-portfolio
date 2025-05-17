/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placehold.co', 'picsum.photos'],
  },
};

module.exports = nextConfig;
