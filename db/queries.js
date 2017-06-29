const knex = require('./knex');

module.exports = {
  getAllParents: function(){
    return knex('parent')
    .join('child', 'parent.id', 'child.parent_id')
    .select('parent.name', 'parent.id', 'child.name as child_name');
  },
  getParentInfo: function(id){
    return knex('parent').where('id', id).select('id', 'name');
  },
  getParentByEmail: function(email){
    return knex('parent').where('email', email).first();
  },
  getChildList: function(id) {
    return knex('child').where('parent_id', id).select('*');
  },
  createChild: function(child) {
    return knex('child').insert(child).returning('*');
  },
  deleteChild: function(id, childID) {
    return knex('child').where('id', childID).andWhere('parent_id', id).del();
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
    return knex('task').insert(task).returning('*')
  },
  createReward: function(reward) {
    return knex('reward').insert(reward).returning('*')
  },
  deleteTask: function(childID, taskID) {
    return knex('task').where('id', taskID).andWhere('child_id', childID).del();
  },
  deleteReward: function(childID, rewardID) {
    return knex('reward').where('id', rewardID).andWhere('child_id', childID).del();
  },
  createParent: function(parent) {
    return knex('parent').insert(parent, 'id').then( ids=>{
      return ids[0]
    })
},
  updatePoints: function(parentID, childID, points){
    return knex('child').where('id', childID).andWhere('parent_id', parentID).update('points', points)
  }
}
