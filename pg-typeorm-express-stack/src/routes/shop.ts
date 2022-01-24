import express from "express"
import shopController from "../controllers/shopController"

const router = express.Router()

router.post("/create", shopController.create)

router.get("/", shopController.list)

router.get("/:id", shopController.index)

router.post("/update/:id", shopController.update)

router.delete("/delete/:id", shopController.drop)

export default router
