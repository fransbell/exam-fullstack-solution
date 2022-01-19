const Item = require("../models/item")
const Shop = require("../models/shop")

const create = async (req, res) => {
  // check if shop exist
  const exist = await Shop.findById(req.body.shopId).catch((e) => {
    return false
  })

  exist
    ? (() => {
        const item = new Item(req.body)
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

const listAll = async (req, res) => {
  const result = await Item.find()
  res.json(result)
}

const shopItems = async (req, res) => {
  const { id } = req.params
  const result = await Item.find({ shopId: id })
  res.json(result)
}

// get item by id
const index = async (req, res) => {
  const result = await Item.findById(req.params.id).catch((e) => {
    return {
      message: `invalid item_id or item does not exist`,
    }
  })
  res.json(result)
}

const update = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      res.json({
        message: "request not authorized",
      })
    })
}

const drop = (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      res.json({
        message: "request not authorized",
      })
    })
}

module.exports = {
  create,
  listAll,
  shopItems,
  index,
  update,
  drop,
}
