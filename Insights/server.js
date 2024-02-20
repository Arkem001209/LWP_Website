const mysql = require('mysql');
const express = require('express');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const app = express();

app.use(session({secret:'ihopethisworksitwouldbecool', resave:false, saveUninitialised:false}));
app.use(passport.initialise());
app.use(passport.session());

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SuperUser',
    password: 'LondonWall1234',
    database: 'insights'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connection to MySQL', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});