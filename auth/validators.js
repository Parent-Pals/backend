const express = require('express');

module.exports = {
  validEmail: (email) => {
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegex.test(email);
  },
  validString: (string) => {
    return typeof string == 'string' && string.trim() != '';
  },
  validUser: (user) => {
    return validEmail(user.email) && validString(user.password) && validString(user.name);
  }
}
