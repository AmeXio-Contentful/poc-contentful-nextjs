/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: '2p89d5j9ulp9',
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: 'mTHrlfx3vWf2wCr7VYS0c7WsfeD41KxVMyqXAfs7YXE',
    CONTENTFUL_ACCESS_TOKEN: 'Dx-j_CMjOL34ESnkSqp9YrQZu-Ud8mRk9PFs4MGrsaM',
    NEXT_PUBLIC_BASE_URL:'http://localhost:3000/',
    CONTENTFUL_REVALIDATE_SECRET: 'ContentFulSecret777'
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
