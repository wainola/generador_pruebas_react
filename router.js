// knex for query building
const knex = require('./knexDB');
const usuario = require('./controllers/usuario');

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
    app.get('/usuario', usuario.GetUser);
}

