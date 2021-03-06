const router = require('express').Router()
const {User, Line} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.find({
    attributes: ['id', 'email'],
    where: {
      id: req.params.id
    },
    include: [Line]
  })
    .then(user => res.json(user))
    .catch(next)
})
