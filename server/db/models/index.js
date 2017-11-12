const User = require('./user')
const Line = require('./line')
const Poem = require('./poem')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Line.belongsTo(Poem, {foreignKey: { allowNull: false}})
Line.belongsTo(User, { foreignKey: {allowNull: false}})
Poem.hasMany(Line)
User.hasMany(Line)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Line,
  Poem
}
