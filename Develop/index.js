//title of my project and sections entitled Description, 
//Title, (Sections - Table of Contents), Installation, Usage, License, Contributing, Tests, and Questions




// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
 type: 'input',
 name: 'title',
 message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
    },
    {
    type: 'list',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices:  ['MIT', 'GPLv2', 'Apache', 'BSD', 'None'],
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    },
    {
    type: 'input',
    name: 'questions',
    message: 'What does the user need to know about questions?',
    },
    {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const readMe = generateMarkdown(answers);
        writeToFile('README.md', readMe);
    });
}

// Function call to initialize app
init();
