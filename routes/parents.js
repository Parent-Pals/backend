var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const queries = require('../db/queries');
console.log('loading route file')

/* GET users listing. */
router.get('/', (req, res) => {
  console.log('Made it to the route!')
  // let children = queries.getChildList(req.params.id);
  // res.send(children);
  res.json({message: "working"})
});

module.exports = router;
