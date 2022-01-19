const Category = require("../models/category")

const create = (req, res) => {
  console.log(req.body)
  const category = new Category(req.body)
  category
    .save()
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      res.status(500).json({
        message: "request not authorized",
      })
    })
}

const list = (req, res) => {
  Category.find()
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      res.status(500).json({
        message: "request not authorized",
      })
    })
}

const index = (req, res) => {
  Category.find()
    .then((result) => {
      if (result.length - 1 >= req.params.id) {
        res.json(result[req.params.id])
      } else {
        res.status(500).json({
          message: "index does not existed",
        })
      }
    })
    .catch((e) => {
      res.status(500).json({
        message: "request not authorized",
      })
    })
}

const update = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body)
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
  Category.findByIdAndRemove(req.params.id)
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
