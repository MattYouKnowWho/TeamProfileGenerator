const managerQuestions = [
    { 
       type: 'input',
       name: 'managerName',
       message: 'What is the name of the manager?',
    },
    {
        type: "input",
        name: "managerId",
        message: "Please, list the manager's ID."
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the email of the team manager?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is the engineer's name?`,
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `Please, list the engineer's ID.`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the engineer's Github username?`,
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `What is the intern's name?`,
    },
    {
        type: 'input',
        name: 'internId',
        message: `Please, list the intern's ID.`,
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the intern's email?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `What is the intern's school?`,
    },
]

const addMoreEmployees = {
    type: 'list',
    name: 'addMore',
    message: 'Would you like to add more employees?',
    choices: ['Add Engineer', 'Add Intern', 'Exit']
}

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMoreEmployees,
}