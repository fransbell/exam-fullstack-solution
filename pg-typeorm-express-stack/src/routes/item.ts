import express from "express"
import itemController from "../controllers/itemController"

const router = express.Router()

router.post("/create", itemController.create)

router.get("/", itemController.list)

router.get("/:id", itemController.index)

router.get("/shop/:id", itemController.shopItems)

router.post("/update/:id", itemController.update)

router.delete("/delete/:id", itemController.drop)

export default router
