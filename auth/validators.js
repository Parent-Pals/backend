const express = require('express');


function validEmail(email) {
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegex.test(email);
}
function validString(string){
    return typeof string == 'string' && string.trim() != '';
  }
function validUser(user) {
    return validEmail(user.email) && validString(user.password) && validString(user.name);
  }
function validUserLogin(user){
    return validEmail(user.email) && validString(user.password);
}

module.exports = {validEmail, validString, validUser, validUserLogin}
