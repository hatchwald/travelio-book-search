/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com', 'googleapi.com'],
  },
}

module.exports = nextConfig
