require('dotenv').config()
var { Prompts, Connection } = require('./config');
var inquirer = require("inquirer");


start();

function start() {
    let SQL = "SELECT "
    SQL += "employee.id AS employeeId, "
    SQL += "job.id AS jobId, "
    SQL += "department.id AS departmentId, "
    SQL += "employee.firstname, "
    SQL += "employee.lastname, "
    SQL += "job.title, "
    SQL += "job.salary, "
    SQL += "department.name AS department "
    SQL += "FROM employee "
    SQL += "LEFT JOIN job "
    SQL += "ON employee.job_id = job.id "
    SQL += "LEFT JOIN department "
    SQL += "ON job.department_id = department.id "

    Connection.query(SQL, function (err, data) {
        if (err) throw err;
        console.table(data)
        menu();
    })
}

function menu() {
    inquirer.prompt(Prompts.viewMenu())
        .then(function (answer) {
            if (answer.option === 'Add new employee') {
                ifAdd();
            }
            else if (answer.option === 'Remove employee') {
                ifRmv();
            } else if (answer.option === "View all employees") {
                seeAll();
            }

        })
}

function ifAdd() {
    var SQL = "SELECT "
    SQL += "title as name, "
    SQL += "id as value "
    SQL += "FROM job"

    Connection.query(SQL, function (err, jobs) {
        if (err) throw err;

        inquirer.prompt(Prompts.ifAdd(jobs))
            .then(function (answer) {
                console.log(answer)

                let sqlStr = "INSERT INTO employee "
                sqlStr += "(firstname, lastname, job_id) "
                sqlStr += "VALUES (?,?,?);"

                const data = [answer.first, answer.last, answer.job_id]

                Connection.query(sqlStr, data, function (err, result) {
                    if (err) throw err;
                    start()
                })
            })
    })
}


function ifRmv() {
    var SQL = "SELECT "
    SQL += "CONCAT_WS(' ', firstname, lastname) AS name, "
    SQL += "id AS value "
    SQL += "FROM employee"

    Connection.query(SQL, function (err, employees) {
        if (err) throw err;

        inquirer.prompt(Prompts.ifRemove(employees))
            .then(function (answer) {
                let sqlStr = `DELETE FROM employee WHERE id = ?;`
                const data = (answer.id);
                Connection.query(sqlStr, data, function (err, result) {
                    if (err) throw err;
                    console.table(result)
                    console.log('employee deleted: ' + result.affectedRows)
                    start();
                })
            })
    })
}


function seeAll() {
    start();
}
