const Sequelize = require('sequelize')
const db = require('../db')
const Line = require('./line')

const Poem = db.define('poem', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{
  defaultScope: {
    include: [Line]
  }
})


module.exports = Poem
