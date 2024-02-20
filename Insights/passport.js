const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SuperUser',
    password: 'LondonWall1234',
    database: 'insights'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

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