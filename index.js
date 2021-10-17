// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github Username');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
    },

    {
        type: "input",
        message: "What is the name of your Project?",
        name: "title"

    },
    {
        type: 'input',
        message: "Please Provide description about your project",
        name: "description"

    },
    {
        type: 'input',
        message: "Please provide the installation steps of your project",
        name: "installation"

    },
    {
        type: 'input',
        message: "How your project can be useful to the user?",
        name: "usage"

    },
    {
        type: 'input',
        message: "list of collaborators if any",
        name: "credit"

    },
    {
        type: 'input',
        message: "What licenses are required with this project?",
        name: "license"

    },
    {
        type: 'input',
        message: "any speacial feature/features of the project which you want to show ",
        name: "features"

    },
    {
        message: "list of contributors",
        name: "contributors"

    },
    {
        message: "write test for your application",
        name: "test"

    },

];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();
