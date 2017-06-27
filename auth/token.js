const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

const payload = {
  id:2
}
const secret = process.env.TOKEN_SECRET;

const expiration = {expiresIn: '2h'}
let tokenTest;

jwt.sign(payload, secret, expiration, (err, token) => {
  console.log('err', err);
  console.log('token', token);
  tokenTest = token
})

// jwt.verify(tokenTest, secret, (err, decoded) => {
//   console.log('decoded', decoded);
// })


module.exports = jwt
