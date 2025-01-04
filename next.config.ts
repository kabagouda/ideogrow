import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/**",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
