const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static exports
    domains: ['xtb-int'],
  },
  trailingSlash: true, // Crucial for static export paths
  productionBrowserSourceMaps: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
