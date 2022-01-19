const express = require("express")
const router = express.Router()

const itemController = require("../controllers/itemController")

// create new item
router.post("/create", itemController.create)

// list of all items
router.get("/", itemController.listAll)

// list shop items
router.get("/shop/:id", itemController.shopItems)

// get item by id
router.get("/:id", itemController.index)

// update existing item by id
router.post("/update/:id", itemController.update)

// delete item by id
router.delete("/delete/:id", itemController.drop)

module.exports = router
