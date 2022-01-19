const MONGO_USER = process.env.MONGO_USER || "root"
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "my_password"
const MONGO_IP = process.env.MONGO_IP || "localhost"
const SERVICE_PORT = process.env.PORT || "1111"

module.exports = {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  SERVICE_PORT,
}
