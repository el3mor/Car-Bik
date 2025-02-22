import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains: ['s3-alpha-sig.figma.com']
  },
  distDir: 'build',
};

export default nextConfig;
