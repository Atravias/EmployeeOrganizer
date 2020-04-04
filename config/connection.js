var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Borleatr000",
    database: "employeeTrackerdb"
})
console.log(process.env.MYSQL_PASSWORD)

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected")
})

module.exports = connection;