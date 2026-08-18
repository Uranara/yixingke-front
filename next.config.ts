import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost','192.168.169.1'],
  async rewrites(){
    return [
      {
        source:"/api/:path*",
        destination:"http://5.181.219.86:3000/api/:path*",
      }
    ]
  }

};

export default nextConfig;
