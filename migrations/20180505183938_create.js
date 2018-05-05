
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', function(t){
      t.increments('id').primary()
      t.string('nombre_test').notNullable()
      t.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('test');
};
