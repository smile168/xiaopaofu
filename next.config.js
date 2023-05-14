/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'xiaopaofu.s3.us-east-1.amazonaws.com',
//         port: '',
//       },
//     ],
//   },
// };

const nextConfig = {
  images: {
    domains: ['xiaopaofu.s3.us-east-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
