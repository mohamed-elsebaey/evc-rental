import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dyryptpqq/image/**",
      },
      {
        protocol: "https",
        hostname: "lwfiles.mycourse.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "readymadeui.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://flowbite.s3.amazonaws.com/blocks/e-commerce",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
