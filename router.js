// knex for query building
const knex = require('./knexDB');
const usuario = require('./controllers/usuario');
const passportService = require('./services/passport');
const passport = require('passport');

// we declare middleware interceptors
const requireSignin = passport.authenticate('local', {session:false});
const requireAuth = passport.authenticate('jwt', {session:false});

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
    app.post('/signup', usuario.Signup)
    app.post('/signin', requireSignin, usuario.Signin);
};

