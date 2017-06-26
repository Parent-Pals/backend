const knex = require('./knex');

module.exports = {
  getParentInfo: function(id){
    return knex('parent').where('id', id).select('id', 'name');
  },
  getParentByEmail: function(email){
    return knex('parent').where('email', email);
  },
  getChildList: function(id) {
    return knex('child').where('parent_id', id).select('*');
  },
  createChild: function(child) {
    return knex('child').insert(child).returning('*');
  },
  deleteChild: function(id) {
    return knex('child').where('id', id).del();
  },
  getChild: function(id, childID) {
    return knex('child').where('child.id', childID).andWhere('child.parent_id', id);
  },
  getChildTask: function(id, childID) {
    return knex('task').join('child','task.child_id', 'child.id').where('task.child_id', childID).andWhere('child.parent_id', id)
          .select('task.name as name', 'task.point_value')
  },
  getChildReward: function(id, childID) {
    return knex('reward').join('child', 'reward.child_id', 'child.id').where('reward.child_id', childID).andWhere('child.parent_id', id)
          .select('reward.name as name', 'reward.point_value')
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
