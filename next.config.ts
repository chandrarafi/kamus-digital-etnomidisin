/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi untuk development
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
