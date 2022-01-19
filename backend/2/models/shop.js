const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Shop = mongoose.model("Shop", shopSchema)
module.exports = Shop
