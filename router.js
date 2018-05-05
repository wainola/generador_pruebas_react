// knex for query building
const knex = require('./knexDB');
// const config = require('./config/config_db');
// const knex = require('knex')({
//     client: 'pg',
//     connection: config
// });

// const CONN_DB = new db();
// const { Client } = require('pg')

// const connectionString = process.env.DATABASE_URL || 'postgres://nrriquel:Nrriquel1987@localhost:5432/generador_pruebas';

// const client = new Client(connectionString);

// client.connect()
// .then(resultado => console.log("Conexion exitosa a la base de datos!"))
// .catch(err => console.log(err));

module.exports = function(app, undefined){
    // api endpoint for testing
    app.get('/test', (req, res, next) => {
        knex.select('id', 'nombre_test', 'created_at', 'updated_at')
        .from('test')
        .then(resultado => {
            console.log(resultado);
            res.json({data: resultado});
        })
        .catch(err => console.log(err));
    });
    app.get('/usuario', (req, res, next) => {

    })
}

