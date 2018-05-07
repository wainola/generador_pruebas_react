const knex = require('../knexDB');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config');

//generating function to return jwt on registration
function tokenForUser(user) {
    //the time when the token was issued
    const timestamp = new Date().getTime();
    /*
        @params
        sub: subject
        iat: issued at time
    */
    return jwt.encode({
        sub: user.email,
        iat: timestamp
    }, config.secret);
}

exports.GetUser = function(req, res, next) {
    knex.select('nombre', 'apellido', 'email', 'created_at', 'updated_at').from('usuario')
        .then(resultado => {
            res.json({data: resultado});
        })
        .catch(err => {
            res.json({error: err});
        });
}

exports.Signin = function(req, res, next) {
    console.log('req user es ', req.user[0]);
    res.json({token: tokenForUser(req.user[0])});
}

exports.Signup = function(req, res, next){
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;
    const created_at = new Date();
    const user = {nombre,apellido,email,password, created_at};
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){
                return next(err);
            }
            user.password = hash;
            // first we check if exists the user
            knex('usuario').where('email', user.email).select('email')
            .then(resultado => {
                if(resultado.length !== 0){
                    console.log(resultado);
                    res.status(422).send({error: "Ya existe el usuario"});
                }
                else{
                    // res.json({msg: "el usuario no existe"});
                    knex('usuario').insert(user)
                    .then(resultado => res.json({token: tokenForUser(user)}))
                    .catch(err => {
                        console.log(err);
                        res.json({error: err})}
                    );
                }
            });
        });
    });
}