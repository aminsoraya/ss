/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trendyol",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "malltina.com",
      },
      {
        protocol: "https",
        hostname: "mltp.malltina.com",
      },
            {
        protocol: "https",
        hostname: "cdn.dsmcdn.com",
      },
    ],
  },
};

export default nextConfig;
