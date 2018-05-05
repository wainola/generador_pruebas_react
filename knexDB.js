const config = require('./config/config_db');
const knex = require('knex')({
    client: 'pg',
    connection: config
});

const knexDB = knex;
module.exports = knexDB;