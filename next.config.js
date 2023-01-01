/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "./" : "",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
