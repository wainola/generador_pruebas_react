// const db = require('./db');

// const CONN_DB = new db();
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://nrriquel:Nrriquel1987@localhost:5432/generador_pruebas';

const client = new Client(connectionString);

client.connect()
.then(resultado => console.log("Conexion exitosa a la base de datos!"))
.catch(err => console.log(err));

client.query('select * from test').then(res => console.log(res)).catch(err => console.log(err));

module.exports = function(app, undefined){
    app.get('/test', (req, res, next) => {
        res.json({msg: "test working"});
    });
}

