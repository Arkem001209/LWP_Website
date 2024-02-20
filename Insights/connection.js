const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SuperUser',
    password: 'LondonWall1234',
    database: 'insights'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;