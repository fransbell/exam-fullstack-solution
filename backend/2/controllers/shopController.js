const Shop = require("../models/shop")

const create = (req, res) => {
  console.log(req.body)
  const shop = new Shop(req.body)
  shop
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      res.json({
        message: "request not authorized",
      })
    })
}

const list = async (req, res) => {
  const result = await Shop.find()
  res.json(result)
}

// get shop by id
const index = async (req, res) => {
  const result = await Shop.findById(req.params.id).catch((e) => {
    return {
      message: `invalid shop_id or shop does not exist`,
    }
  })
  res.json(result)
}

const update = (req, res) => {
  Shop.findByIdAndUpdate(req.params.id, req.body)
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
  Shop.findByIdAndRemove(req.params.id)
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
  list,
  index,
  update,
  drop,
}
