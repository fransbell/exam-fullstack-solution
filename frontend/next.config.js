const apiURI = process.env.DOCKER
  ? "http://backend:1111/api/:path*"
  : "http://localhost:1111/api/:path*"

console.log(`apiuri : ${apiURI}`)

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: apiURI,
      },
    ]
  },
}
