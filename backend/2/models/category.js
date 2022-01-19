const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Category = mongoose.model("Categoty", categorySchema)
module.exports = Category
