const inquirer = require('inquirer');

// array of questions for user
const questions = ['What is your GitHub username?',
'What is your email address?', 
"What is your project's name?", 
'Please write a small description of your project',
'What kind of license should your project have?',
'What command should be run to install dependencies?',
'What command should be run to run tests?',
'What does the user need to know about using the repo?',
'What does the user need to know about contributing to the repo?'
];



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'project',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'using',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contributing',
        }
      
        ])
        .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
        );
}

// function call to initialize program
init();




