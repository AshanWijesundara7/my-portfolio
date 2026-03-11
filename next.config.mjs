/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enables static HTML export
  images: {
    unoptimized: true,    // allows next/image without server
  },
};

export default nextConfig;