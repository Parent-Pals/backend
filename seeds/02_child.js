
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE child RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('child').insert([
        {name: 'bob', points: 0, parent_id: 2},
        {name: 'winston', points: 2, parent_id: 2},
        {name: 'alex', points: 0, parent_id: 4},
        {name: 'steve', points: 10, parent_id: 3},
        {name: 'jaci', points: 100, parent_id: 1}
      ]);
    });
};
