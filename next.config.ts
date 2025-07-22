const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap", // this matches app/sitemap/route.js
      },
    ];
  },
};

export default nextConfig;