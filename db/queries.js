const knex = require('./knex');

module.exports = {
  getChildList: function(id) {
    return knex('child').where('parent_id', id).select('*');
  },
  createChild: function(child) {
    return knex('child').insert(child).returning('*');
  },
  deleteChild: function(id) {
    return knex('child').where('id', id).del();
  },
  getChild: function(id) {
    return knex('child').where('child.id', id);
  },
  getChildTask: function(id) {
    return knex('task').where('child_id', id);
  },
  getChildReward: function(id) {
    return knex('reward').where('child_id', id);
  },
  createTask: function(task) {
    return knex('task').insert(reward).returning('*')
  },
  createReward: function(reward) {
    return knex('reward').insert(reward).returning('*')
  },
  deleteTask: function(id) {
    return knex('task').where('id', id).del();
  },
  deleteReward: function(id) {
    return knex('reward').where('id', id).del();
  },
  createParent: function(parent) {
    return knex('parent').insert(parent).returning('*')
  }
}
