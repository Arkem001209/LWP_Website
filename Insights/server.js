const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'insights'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connection to MySQL', err);
        return;
    }
    console.log('Connected to MySQL');
});