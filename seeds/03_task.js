
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE task RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('task').insert([
        {name: 'garbage', point_value: 2, child_id: 1},
        {name: 'dishes', point_value: 5, child_id: 1},
        {name: 'walk the dog', point_value: 2, child_id: 2},
        {name: 'sweep', point_value: 2, child_id: 3},
        {name: 'mop', point_value: 2, child_id: 4},
        {name: 'sing', point_value: 2, child_id: 5},
      ]);
    });
};
