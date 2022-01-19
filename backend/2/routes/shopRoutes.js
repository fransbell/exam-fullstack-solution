const express = require("express")
const router = express.Router()

const shopController = require("../controllers/shopController")

// create new shop
router.post("/create", shopController.create)

// list of all shops
router.get("/", shopController.list)

// get shop by id
router.get("/:id", shopController.index)

// update existing shop by id
router.post("/update/:id", shopController.update)

// delete shop by id
router.delete("/delete/:id", shopController.drop)

module.exports = router
