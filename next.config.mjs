/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use src/app as the App Router directory (default in Next.js 13.4+)
  // No need for experimental.appDir unless customizing

  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,

  // Explicitly set the source directory
  distDir: ".next",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ensure proper handling of routes
  // No custom rewrites needed for App Router unless you have special cases
  async rewrites() {
    return [
      {
        source: "/business",
        destination: "/business",
      },
      {
        source: "/company",
        destination: "/company",
      },
      {
        source: "/recruit",
        destination: "/recruit",
      },
      {
        source: "/privacy",
        destination: "/privacy",
      },
      {
        source: "/contact",
        destination: "/contact",
      },
    ];
  },
};

export default nextConfig;
