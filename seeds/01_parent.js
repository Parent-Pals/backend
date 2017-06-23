const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);


exports.seed = function(knex, Promise) {
return knex.raw('TRUNCATE parent RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('parent').insert([
          {name: 'admin', password: bcrypt.hashSync('platte51', salt), email: 'chasehemerda@gmail.com'},
          {name: 'matt', password: bcrypt.hashSync('matthew123', salt), email: 'matthewgonzer@gmail.com'},
          {name: 'adam', password: bcrypt.hashSync('adam123', salt), email: 'miner.adam1@hotmail.com'},
          {name: 'marlena', password: bcrypt.hashSync('marlena123', salt), email: 'baker.marlena@gmail.com'}
      ]);
    });
};
