/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xiaopaofu.s3.us-east-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
