var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const queries = require('../db/queries');
const authMiddleware = require('../auth/middleware.js')

/* GET users listing. */
router.get('/:id', authMiddleware.allowAccess, function(req, res, next) {
  let parent = queries.getParentInfo(req.params.id)
  let child = queries.getChildList(req.params.id)
    Promise.all([parent, child]).then(children=>{
      res.json(children);
    })
});

router.post('/:id/', authMiddleware.allowAccess, function(req, res){
  let child = {
    parent_id: req.params.id,
    name: req.body.name
  }
  queries.createChild(child)
  .then(results=>{
    res.send(results[0]);
  })
})

router.delete('/:id/:childID', authMiddleware.allowAccess, function(req, res){
  let parentID = req.params.id;
  let childID = req.params.childID;
  queries.deleteChild(parentID, childID)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.get('/:id/:childID', authMiddleware.allowAccess, function(req, res){
  let parentID = req.params.id
  let childID = req.params.childID
  let child = queries.getChild(parentID, childID)
  let rewards = queries.getChildReward(parentID, childID)
  let tasks = queries.getChildTask(parentID, childID)
    Promise.all([child,rewards,tasks]).then(child=>{
      res.json(child)
    })
})

router.post('/:id/:childID/task', authMiddleware.allowAccess, function(req, res){
  let childID = req.params.childID;
  let task = {name: req.body.name, point_value: req.body.point_value, child_id: childID};
  queries.createTask(task)
    .then(tasks=>{
      res.send(tasks[0])
    })
})

router.post('/:id/child/:childID/reward', authMiddleware.allowAccess, function(req, res){
  console.log('here reward  ')
  console.log(req.body)
  console.log(req.params)
  let childID = req.params.childID;
  let reward = {name: req.body.name, point_value: req.body.point_value, child_id: childID};
  queries.createReward(reward)
    .then(rewards=>{
      res.send(rewards[0])
    })
})

router.delete('/:id/:childID/task/:taskID', authMiddleware.allowAccess, function(req, res){
  let childID = req.params.childID;
  let taskID = req.params.taskID;
  queries.deleteTask(childID, taskID)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.delete('/:id/:childID/reward/:rewardID', authMiddleware.allowAccess, function(req, res){
  let childID = req.params.childID;
  let rewardID = req.params.taskID;
  queries.deleteReward(childID, taskID)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.put('/:id/:childID', authMiddleware.allowAccess, function(req, res){
  let parentID = req.params.id;
  let childID = req.params.childID;
  queries.updatePoints(parentID, childID, req.body)
    .then(child=>{
      res.json(child[0])
    })
})

router.post('/', function(req, res){
  queries.createParent(req.body)
    .then(parent=>{
      res.send(parent[0])
    })
})

module.exports = router;
