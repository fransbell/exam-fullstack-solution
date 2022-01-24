import { Request, Response } from "express"
import Item from "../entity/item"
import Shop from "../entity/shop"

import { deconObj } from "../utils/index"

const create = async (req: Request, res: Response) => {
  const exist = await Shop.findByIds([req.body.shopId]).catch((e) => {
    return false
  })

  exist
    ? (() => {
        const item = new Item()
        deconObj(item, req.body)
        item
          .save()
          .then((result) => {
            res.json(result)
          })
          .catch((e) => {
            res.json({
              message: "request not authorized",
            })
          })
      })()
    : (() => {
        res.status(500).json({
          message: "invalid shop or shop does not exist",
        })
      })()
}

// get all items
const list = (req: Request, res: Response) => {
  Item.find()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

//get item by id
const shopItems = (req: Request, res: Response) => {
  const { id } = req.params
  Item.find({ shopId: id })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}
const index = (req: Request, res: Response) => {
  const { id } = req.params
  Item.find({ _id: id })
    .then((result) => {
      res.json(result[0])
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const update = (req: Request, res: Response) => {
  Item.update({ _id: req.params.id }, req.body)
    .then(async (result) => {
      const item = await Item.findByIds([req.params.id])
      res.json(item)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

const drop = (req: Request, res: Response) => {
  Item.delete({ _id: req.params.id })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: "request not authorized" })
    })
}

export default { create, list, shopItems, index, update, drop }
