import express from "express"
import categoryController from "../controllers/categoryController"

const router = express.Router()

router.post("/create", categoryController.create)

router.get("/", categoryController.list)

router.get("/:id", categoryController.index)

router.post("/update/:id", categoryController.update)

router.delete("/delete/:id", categoryController.drop)

export default router
