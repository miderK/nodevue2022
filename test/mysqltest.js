const mysql = require('mysql');
const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'dooo',
    password : 'dooo!',
    database : 'dooodb'
});
connection.connect();

connection.query('select * from User', function (error, results, fields) {
    if (error) throw error;
    console.log('The First User is: ', results[0]);
});
connection.end();