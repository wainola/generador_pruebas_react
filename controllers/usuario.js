const knex = require('../knexDB');

exports.GetUser = function(req, res, next) {
    knex.select('nombre', 'apellido', 'email', 'created_at', 'updated_at').from('usuario')
        .then(resultado => {
            res.json({data: resultado});
        })
        .catch(err => {
            res.json({error: err});
        });
}