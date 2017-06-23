var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const queries = require('../db/queries');

/* GET users listing. */
router.get('/parent/:id', function(req, res, next) {
  let children = queries.getChildList(req.params.id);
  res.send('children');
});

module.exports = router;
