var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "employeeTrackerdb"
})


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected")
})

module.exports = connection;