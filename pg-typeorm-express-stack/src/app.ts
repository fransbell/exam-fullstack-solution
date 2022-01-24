import express, { Application, Request, Response } from "express"
import { createConnection } from "typeorm"
import cors from "cors"

import Shop from "./routes/shop"
import Category from "./routes/category"
import Item from "./routes/item"

const app: Application = express()
const PORT: string = process.env.PORT || "1111"

import option from "./db.config"

const connection = createConnection(option)
  .then((result) => {
    console.log("connected to db!!")
  })
  .catch((err) => {
    console.log("couldnot connect to db")
  })

app.use(cors())
app.use(express.json())

app.use("/api/shops", Shop)
app.use("/api/category", Category)
app.use("/api/items", Item)

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})
