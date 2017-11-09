const router = require('express').Router()
const {Poem, Line} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Poem.findAll()
    .then(poems => res.json(poems))
    .catch(next)
})
