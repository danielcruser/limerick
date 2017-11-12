const Sequelize = require('sequelize');
const db = require('../db');

const Favorite = db.define('favorite', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  favorited: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Favorite
