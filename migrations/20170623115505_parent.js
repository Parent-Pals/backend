
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parent', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('password').notNullable();
    table.text('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parent');
};
