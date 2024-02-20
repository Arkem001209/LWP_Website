const express = require('express');
const passport = require('./passport');
const session = require('express-session');
const connection = require('./connection');

const app = express();

app.use(session({secret:'ihopethisworksitwouldbecool', resave:false, saveUninitialised:false}));
app.use(passport.initialise());
app.use(passport.session());

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');


app.listen(3000, () => {
    console.log('server is running on port 3000');
});