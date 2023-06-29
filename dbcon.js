var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vaibhav@123",
    database: "vaibhav"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected to mysql');
    var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});  