const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email address',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'Project name',
    },
    {
        type: 'input',
        message: 'Please write a small description of your project',
        name: 'Project description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'Project license',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'Command to install',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'Command to test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'Using the repo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'Contributing to the repo',
    }
  
    ];



// function to write README file
function writeToFile(data) {
    const fileName = `${data.name}.json`;
    
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>
            writeToFile(data)
        );
}

// function call to initialize program
init();




