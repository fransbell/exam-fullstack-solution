const express = require("express")
const router = express.Router()

const categoryController = require("../controllers/categoryController")

// create new shop
router.post("/create", categoryController.create)

// list of all shops
router.get("/", categoryController.list)

// get shop by id
router.get("/:id", categoryController.index)

// update existing item by id
router.post("/update/:id", categoryController.update)

// delete item by id
router.delete("/delete/:id", categoryController.drop)

module.exports = router
