import { Connection, ConnectionOptions, ConnectionOptionsReader } from "typeorm"

import entities from "./entity"

const options: ConnectionOptions = {
  type: "postgres",
  host: "postgresdb",
  port: 5432,
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "my_password",
  database: process.env.DB_DATABASE || "app",
  synchronize: true,
  logging: false,
  entities,
}
export default options
