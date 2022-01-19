module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:1111/api/:path*",
      },
    ]
  },
}
