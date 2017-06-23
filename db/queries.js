const knex = require('./knex');

module.exports = {
  getChildList: function(id){
    return knex('child').where('parent_id', id).select('*')
  }
}
