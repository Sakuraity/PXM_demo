import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jarsking.com',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
