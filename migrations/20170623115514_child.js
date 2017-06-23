
exports.up = function(knex, Promise) {
  return knex.schema.createTable('child', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('points').notNullable();
    table.integer('parent_id').references('parent.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('child');
};
