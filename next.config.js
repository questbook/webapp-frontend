module.exports = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com',],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};
