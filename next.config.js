/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "images.unsplash.com"],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
};

export default nextConfig;
