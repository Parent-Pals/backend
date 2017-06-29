const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')
const authMiddleware = require('../auth/middleware.js')

router.get('/', authMiddleware.allowAccess, (req, res, next) => {
  res.json(queries.getAllParents())
})


module.exports = router
