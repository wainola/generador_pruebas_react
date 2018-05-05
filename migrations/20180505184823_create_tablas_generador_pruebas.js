exports.up = function (knex, Promise) {
    // table usuario
    return Promise.all([
        knex.schema.createTable('usuario', function (table) {
            table.increments('id').primary();
            table.string('nombre', 100).notNullable();
            table.string('apellido').notNullable();
            table.string('email').notNullable();
            table.timestamps('fehca_creacion');
        }),
        knex.schema.createTable('documento', function (table) {
            table.increments('id').primary();
            table.integer('id_usuario').unsigned();
            table.foreign('id_usuario').references('usuario.id');
            table.timestamps('fecha_creacion');
        }),
        // tabla preguntas
        knex.schema.createTable('pregunta', function (table) {
            table.increments('id').primary();
            table.integer('id_documento').unsigned();
            table.foreign('id_documento').references('documento.id');
            table.timestamps('fecha_creacion');
            table.string('pregunta').notNullable();
        }),
        // tabla enunciados
        knex.schema.createTable('enunciados', function (table) {
            table.increments('id').primary();
            table.integer('id_documento').unsigned();
            table.foreign('id_documento').references('documento.id');
            table.timestamps('fecha_creacion');
            table.string('enunciado').notNullable();
        }),
        knex.schema.createTable('alternativas', function(table){
            table.increments('id').primary();
            table.integer('id_documento').unsigned();
            table.foreign('id_documento').references('documento.id');
            table.timestamps('fecha_creacion');
            table.string('alternativa');
        }),
        // tabla guia generada
        knex.schema.createTable('guia_generada', function (table) {
            table.increments('id').primary();
            table.integer('id_documento').unsigned();
            table.foreign('id_documento').references('documento.id');
            table.timestamps('fecha_creacion');
            table.string('nombre_guia_generada').notNullable();
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('pregunta'),
        knex.schema.dropTableIfExists('enunciados'),
        knex.schema.dropTableIfExists('alternativas'),
        knex.schema.dropTableIfExists('guia_generada'),
        knex.schema.dropTableIfExists('documento'),
        knex.schema.dropTableIfExists('usuario')
    ]);
};