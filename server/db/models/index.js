const User = require('./user')
const Line = require('./line')
const Poem = require('./poem')
const Favorite = require('./favorite')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Line.belongsTo(User, { foreignKey: {allowNull: false}})
Line.belongsTo(Poem, {foreignKey: { allowNull: false}})
User.hasMany(Line)
Poem.hasMany(Line)
User.belongsToMany(Poem, {through: Favorite})
Poem.belongsToMany(User, {through: Favorite})
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Line,
  Poem,
  Favorite
}
