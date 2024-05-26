/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://api.notion.com/v1/:path*`,
      },
    ];
  }
};

export default nextConfig;
