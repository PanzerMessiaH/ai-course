import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: false, // Vercel handles this automatically
  images: {
    unoptimized: true, // Keep for compatibility
  },
  // External packages for server components
  serverExternalPackages: ['better-sqlite3'],
  // Environment-specific configuration
  ...(process.env.NODE_ENV === 'production' && {
    // Production optimizations
    compress: true,
    poweredByHeader: false,
  }),
};

export default nextConfig;
