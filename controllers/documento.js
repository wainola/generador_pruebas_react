const knex = require('../knexDB');

exports.CreateDocumento = function(req, res, next){
    res.json({msg: 'Create Documento'});
}