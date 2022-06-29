var mysql = require('mysql');

//local mysql db connection

const pool = mysql.createPool({
host : 'localhost',
user : 'root',
password : '',
database : 'student_db'
});

module.exports = pool;

