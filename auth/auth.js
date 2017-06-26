const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router();
const queries = require('../db/queries')
const validators = require('./validators')

router.post('/register', (req, res) => {
  if (validators.validUser(req.body)) {
    queries.getParentByEmail(req.body.email)
    .then(parent => {
      if(!parent){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const parent = {
            email: req.body.email,
            password: hash,
            name: req.body.name
          }
          queries.createParent(parent)

        })
      }
    })
  }
})

router.post('/login', (req, res, next) => {
  if(validators.validUser(req.body)){
    queries.getParentByEmail(req.body.email)
    .then(parent => {
      if (parent) {
        bcrypt.compare(req.body.password, parent.password)
        .then((result) => {
          if (result){
            //token here
          }
        })
      }
    })
  }
})



module.exports = router;
