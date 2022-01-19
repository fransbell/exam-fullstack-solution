const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema(
  {
    shopId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Item = mongoose.model("Item", itemSchema)
module.exports = Item
