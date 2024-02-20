const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        //Authentication logic here: to do
        if (username === 'user' && password ==='password') {
            return done(null, {id: 1, username: 'user'});
        } else {
            return done(null, false, { message: 'Incorrect username or password'});
        }
    }
));