const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a small description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }
  
    ];



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
        );
}

// function call to initialize program
init();





