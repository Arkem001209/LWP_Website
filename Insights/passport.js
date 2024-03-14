const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const connection = require('./connection')


passport.use(new LocalStrategy(
    function(username, password, done) {
        const query = 'SELECT * FROM insights WHERE username = ?';
        connection.query(query, [username], (error, results, fields) => {
            if (error) {
                return done(error);
            }
            if (results.length === 0) {
                return done(null, false, { message: 'Incorrect username.'});
            }
            const user = results[0];
            //hashed password code here
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }
                if (!isMatch) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, user);
            });
        });
    }
));

module.exports = passport;