/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  scope: "/src/app",
  disable: process.env.NODE_ENV !== "production",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['assets.website-files.com', 'i.pravatar.cc'],
  },
}

module.exports = withPWA(withNextIntl(nextConfig))
