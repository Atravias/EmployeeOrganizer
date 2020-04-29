module.exports = {
    viewMenu: function () {
        return {
            name: "option",
            message: "What would you like to do?",
            type: "list",
            choices: ['Add new employee', 'Remove employee', 'View all employees']
        }
    },
    ifAdd: function (choices) {
        return [
            {
                name: 'first',
                message: 'What is their first name?',
                type: 'input'
            },
            {
                name: 'last',
                message: 'What is their last name?',
                type: 'input'
            },
            {
                name: 'job_id',
                message: 'What is their Job?',
                type: 'list',
                choices: choices
            }
        ]
    },
    ifRemove: function (choices) {
        return {
            name: "id",
            message: "Please enter the employees id number",
            type: "list",
            choices: choices
        }
    },
    ifView: {
        name: "department",
        message: "Which department?",
        type: "list",
        choices: ["Management", "Human Resources", "Customer Service Reps", "All"]
    }

}















