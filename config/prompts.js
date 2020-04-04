module.exports = {
    viewMenu: {
        name: "option",
        message: "What would you like to do?",
        type: "list",
        choices: ['Add new employee', 'Remove employee', 'View all employees']
    },
    ifAdd: {
        name: 'FirstName',
        message: 'What is their first name?',
        type: 'input'
    },
    ifAdd2: {
        name: "LastName",
        message: "What is their last name?",
        type: "input"
    },
    ifRemove: {
        name: "FaLName",
        message: "Please enter the employees first and last name",
        type: "input"
    },
    ifView: {
        name: "department",
        message: "Which department?",
        type: "list",
        choices: ["Management", "Human Resources", "Customer Service Reps", "All"]
    }

}















