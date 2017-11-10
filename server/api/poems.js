const router = require('express').Router()
const {Poem, Line} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Poem.findAll()
    .then(poems => res.json(poems))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Poem.find({
    where: {
      id: req.params.id
    }
  })
    .then(poem => res.json(poem))
    .catch(next)
})

//Mock data for post
// "Fashion"
// "Can't believe it’s true, must be a ruse. It seems kids these days actually choose. It's a very strange fad, to dress up just like Dad. Bell-bottom pants and big clunky shoes."


router.post('/', (req, res, next) => {
  Poem.create(req.body)
    .then(poem => res.json(poem))
    .catch(next)
})
