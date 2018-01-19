
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('point_value');
    table.integer('child_id').references('child.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
