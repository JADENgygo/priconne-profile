/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    images: {
      unoptimized: true,
    }
  }
};
