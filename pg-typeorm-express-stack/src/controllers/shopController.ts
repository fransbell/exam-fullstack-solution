import { Request, Response } from "express"
import Shop from "../entity/shop"

import { deconObj } from "../utils/index"

const create = (req: Request, res: Response) => {
  const shop = new Shop()
  deconObj(shop, req.body)
  shop
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

// get all shops
const list = (req: Request, res: Response) => {
  Shop.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

//get shop by id
const index = (req: Request, res: Response) => {
  const { id } = req.params
  Shop.findByIds([id])
    .then((result) => {
      res.json(result[0])
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const update = (req: Request, res: Response) => {
  Shop.update({ _id: req.params.id }, req.body)
    .then(async (result) => {
      const shop = await Shop.findByIds([req.params.id])
      res.json(shop)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const drop = (req: Request, res: Response) => {
  Shop.delete({ _id: req.params.id })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

export default { create, list, index, update, drop }
