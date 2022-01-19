const express = require("express")
const mongoose = require("mongoose")
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  SERVICE_PORT,
} = require("./config")
const cors = require("cors")

const URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:27017/webapp?authSource=admin`

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to db")
  })
  .catch((e) => {
    console.log(e)
  })

const app = express()
const PORT = SERVICE_PORT

// Routes && Controller
const Shop = require("./routes/shopRoutes")
const Category = require("./routes/categoryRoutes")
const Item = require("./routes/itemRoutes")

// Middleware
app.use(cors())
app.options("*", cors())
app.use(express.json())

// Routes
app.use("/api/shops", Shop)
app.use("/api/category", Category)
app.use("/api/items", Item)

// Start Service
app.listen(PORT, () => {
  console.log(`app listen on port : ${PORT}`)
})
