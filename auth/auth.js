const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router();
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')
const validators = require('./validators')
require('dotenv').config();

router.post('/register', (req, res, next) => {
  if (validators.validUser(req.body)) {
    queries.getParentByEmail(req.body.email)
    .then(parent => {
      console.log(parent)
      if(!parent){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const parent = {
            email: req.body.email,
            password: hash,
            name: req.body.name
          }
          queries.createParent(parent)
          .then (id => {
            jwt.sign({
              id
            }, process.env.TOKEN_SECRET, {expiresIn: '2h'}, (err, token)=> {
              console.log('err', err);
              console.log('token', token);
              res.json({
                id,
                token,
                message: 'I work'
              })
            })
          })
        })
      }
      else {
        next(new Error('Email in use'))
      }
    })
  }
  else {
    next(new Error('Invalid user'))
  }
})


router.post('/login', (req, res, next)=>{
  console.log(req.body)
  if(validators.validUserLogin(req.body)){
    queries.getParentByEmail(req.body.email)
    .then ((parent) => {
      console.log('parent', parent)
      if(parent){
        jwt.sign({
          id: parent.id
        }, process.env.TOKEN_SECRET, {expiresIn: '2h'}, (err, token)=> {
          console.log('err', err);
          console.log('token', token);
          res.json({
            id: parent.id,
            token,
            message: 'I work'
          })
        });
      } else {
        next(new Error('Invalid Login1!'))
      }
    })
  }else {
    next (new Error('Invalid Login!2'))
  }
})


module.exports = router;
