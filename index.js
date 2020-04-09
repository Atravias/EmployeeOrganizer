require('dotenv').config()
var { Prompts, Connection } = require('./config');
var inquirer = require("inquirer");

start();

function start() {
    Connection.query("SELECT * FROM employee", function (err, data) {
        if (err) throw err;
        console.table(data)
        menu();
    })
}

function menu() {
    inquirer.prompt(Prompts.viewMenu)
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
    inquirer.prompt(Prompts.ifAdd)
        .then(function (answer) {
            console.log(answer)

            let sqlStr = "INSERT INTO employee "
            sqlStr += "(firstname, lastname, job_id) "
            sqlStr += "VALUES (?,?,?);"

            const data = [answer.first, answer.last, 1]

            Connection.query(sqlStr, data, function (err, result) {
                if (err) throw err;
                start()
            })
        })
}


function ifRmv() {
    inquirer.prompt(Prompts.ifRemove).then(function (fname, lname) {
        let sqlStr = `UPDATE employee SET title = "terminated" WHERE firstname=?,lastname=?`
        const data = [fname, lname];
        Connection.query(sqlStr, data, function (err, result) {
            if (err) throw err;
            start();
        })
    })
}

function seeAll() {
    inquirer.prompt(Prompts.ifView).then(function () {
        Connection.query("SELECT * FROM employee", function (err, data) {
            if (err) throw err;
            console.table(data)
            menu();
        })
    })
}
