module.exports = {
    viewMenu: {
        name: "option",
        message: "What would you like to do?",
        type: "list",
        choices: ['Add new employee', 'Remove employee', 'View all employees']
    },
    ifAdd: [
        {
            name: 'first',
            message: 'What is their first name?',
            type: 'input'
        }, {
            name: 'last',
            message: 'What is their last name?',
            type: 'input'
        },
    ],
    ifRemove: [{
        name: "first",
        message: "Please enter the employees first name",
        type: "input"
    }, {
        name: "last",
        message: "Please enter the employees last name",
        type: "input"
    }],
    ifView: {
        name: "department",
        message: "Which department?",
        type: "list",
        choices: ["Management", "Human Resources", "Customer Service Reps", "All"]
    }

}















