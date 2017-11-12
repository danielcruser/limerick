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
    defaultValue: false
  }
})


Favorite.toggle = function (id, favorited) {
  console.log('check here', id, favorited )
  return Favorite.update({favorited: !favorited}, {
    where: {
      id
    },
    returning: true
  })
}

module.exports = Favorite
