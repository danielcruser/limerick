const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

const Line = db.define('line', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  spot: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 4
    }
  }
  },{
  defaultScope: {
    include: [User]
  }

})

module.exports = Line
