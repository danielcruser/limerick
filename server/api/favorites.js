const router = require('express').Router()
const {Favorite} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Favorite.findAll()
    .then(lines => res.json(lines))
    .catch(next)
})

router.put('/', (req, res, next) => {
  Favorite.findOrCreate({where: req.body})
    .then(favorite => {
      const found = favorite[0]
      console.log('what is favorite', favorite[0].id)
      return Favorite.toggle(found.id, found.favorited)}
    )
    // [1][0] selects the first(only) instance that was updated, instead of number of updated rows
    .then(favorite => res.json(favorite[1][0]))
    .catch(next)
})
