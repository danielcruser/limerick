const router = require('express').Router()
const {Line} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Line.findAll()
    .then(lines => res.json(lines))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Line.create(req.body)
    .then(line => res.json(line))
    .catch(next)
})
