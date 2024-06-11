/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'baconmockup.com',
            port: '',
            pathname: '/200/300',
          },
        ],
      },
};

export default nextConfig;
