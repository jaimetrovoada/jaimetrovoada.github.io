/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaimetrovoada.vercel.app",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

module.exports = nextConfig;
