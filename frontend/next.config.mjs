/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Adjusted for compatibility with App Router
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig; 