import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "https://www.teachkindness.com",
  basePath: "",
};

export default nextConfig;
