import { Request, Response } from "express"
import Category from "../entity/category"
import { deconObj } from "../utils/index"

const create = (req: Request, res: Response) => {
  const category = new Category()
  deconObj(category, req.body)
  category
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

// list all category
const list = (req: Request, res: Response) => {
  Category.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const index = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await Category.find()
  if (result[parseInt(id)]) {
    res.json([result[parseInt(id)]])
  } else {
    res.status(500).json({ message: "request not authorized" })
  }
}

const update = (req: Request, res: Response) => {
  Category.update({ _id: req.params.id }, req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const drop = (req: Request, res: Response) => {
  Category.delete({ _id: req.params.id })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

export default { create, list, index, update, drop }
