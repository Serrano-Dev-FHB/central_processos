/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    secret: "547687a7ca6c47a8878c74",
    expired: "1" // Dias
  }
}

module.exports = nextConfig
