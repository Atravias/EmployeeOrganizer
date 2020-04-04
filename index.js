var { Prompts, Connection } = require('./config');
var inquirer = require("inquirer");
var { log } = console;



Connection.query("SELECT * FROM employee", function (err, data) {
    if (err) throw err;

    console.log(data)

    inquirer.prompt(Prompts.viewMenu)
        .then(function (answer) {
            console.log(answer)

            if (answer.option === 'Add new employee') {
                ifAdd();
            }

            if (answer.option === 'Remove employee') {

            }
        })
})

function ifAdd() {
    inquirer.prompt(Prompts.ifAdd)
        .then(function (fName) {
            console.log(fName)


        })
}

function lName() {
    inquirer.prompt(Prompts.ifAdd2)
        .then(function (lName) {
            log(lName)
        })
}