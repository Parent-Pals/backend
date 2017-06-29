const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')
const authMiddleware = require('../auth/middleware.js')

router.get('/:id', authMiddleware.allowAccess, (req, res, next) => {
  queries.getAllParents().then(parent => {
    res.json(parent)
  })
})

module.exports = router
