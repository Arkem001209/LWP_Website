const express = require('express');
const passport = require('./passport');
const session = require('express-session');
const connection = require('./connection');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//this is the express code, need to figure out what this does lol
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({secret:'ihopethisworksitwouldbecool', resave:false, saveUninitialised:false}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log('server is running on port ${port}');
});