var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const queries = require('../db/queries');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let parent = queries.getParentInfo(req.params.id)
  let child = queries.getChildList(req.params.id)
    Promise.all([parent, child]).then(children=>{
      res.json(children);
    })
});

router.post('/:id/', function(req, res){
  queries.createChild(req.body)
  .then(results=>{
    res.send(results[0]);
  })
})

router.delete('/:id/:id',function(req, res){
  queries.deleteChild(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.get('/:id/:childID', function(req, res){
  let parentID = req.params.id
  let childID = req.params.childID
  let child = queries.getChild(parentID, childID)
  let rewards = queries.getChildReward(parentID, childID)
  let tasks = queries.getChildTask(parentID, childID)
    Promise.all([child,rewards,tasks]).then(child=>{
      res.json(child)
    })
})

router.post('/:id/:id/task', function(req, res){
  queries.createTask(req.body)
    .then(tasks=>{
      res.send(tasks[0])
    })
})

router.post('/:id/:id/reward', function(req, res){
  queries.createReward(req.body)
    .then(rewards=>{
      res.send(rewards[0])
    })
})

router.delete('/:id/:id/task/:id', function(req, res){
  queries.deleteTask(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.delete('/:id/:id/reward/:id', function(req, res){
  queries.deleteReward(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.put('/:id/:id', function(req, res){
  queries.updatePoints(req.params.id, req.body)
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
