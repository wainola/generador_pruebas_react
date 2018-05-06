
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.alterTable('usuario', function(table){
    table.string('password').notNullable();
  })]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('test'),
      knex.schema.dropTableIfExists('pregunta'),
      knex.schema.dropTableIfExists('enunciados'),
      knex.schema.dropTableIfExists('alternativas'),
      knex.schema.dropTableIfExists('guia_generada'),
      knex.schema.dropTableIfExists('documento'),
      knex.schema.dropTableIfExists('usuario')
  ]);
};
