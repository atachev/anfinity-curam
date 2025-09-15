import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
  },
  swcMinify: true,
  compress: true,
};

export default nextConfig;
