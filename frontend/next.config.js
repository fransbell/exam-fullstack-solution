module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:1111/api/:path*",
      },
    ]
  },
}
