
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE reward RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('reward').insert([
        {name: 'pizza', point_value: 5, child_id: 1},
        {name: 'power ranger toy', point_value: 25, child_id: 1},
        {name: 'walk', point_value: 10, child_id: 2},
        {name: 'cake', point_value: 10, child_id: 3},
        {name: 'soda', point_value: 10, child_id: 4},
        {name: 'pony', point_value: 10, child_id: 5},
      ]);
    });
};
