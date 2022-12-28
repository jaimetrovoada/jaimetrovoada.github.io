/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/jaimetrovoada.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
