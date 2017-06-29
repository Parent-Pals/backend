const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')
const authMiddleware = require('../auth/middleware.js')

router.get('/:id', authMiddleware.allowAccess, (req, res, next) => {
  console.log(queries.getAllParents());
  res.json(queries.getAllParents())
})


module.exports = router
