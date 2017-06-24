const knex = require('./knex');

module.exports = {
  getChildList: function(id){
    return knex('child').where('parent_id', id).select('*');
  },
  createChild: function(child){
    return knex('child').insert(child).returning('*');
  },
  deleteChild: function(id){
    return knex('child').where('id', id).del();
  },
  getChildPage: function(id){
    return knex('child').where('child.id', id)
    .join('task', 'task.child_id', 'child.id')
    .join('reward', 'reward.child_id', 'child.id')
    .select('child.id as id', 'child.name as name', 'task.name as task_name', 'task.point_value as task_point_value', 'reward.name as reward_name', 'reward.point_value as reward_point_value')
  },
  createTask: function(task){
    return knex('task').insert(reward).returning('*')
  },
  createReward: function(reward){
    return knex('reward').insert(reward).returning('*')
  },
  deleteTask: function(id){
    return knex('task').where('id', id).del();
  },
  deleteReward: function(id){
    return knex('reward').where('id', id).del();
  },
  createParent: function(parent){
    return knex('parent').insert(parent).returning('*')
  }
}
