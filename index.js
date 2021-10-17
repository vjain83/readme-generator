// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is author's name?",

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',

    },


    {
        type: "input",
        message: "What is the projetc title name?",
        name: "title"

    },
    {
        type: 'input',
        message: "Please Provide description about your project",
        name: "description"

    },
    {
        type: 'input',
        message: "Please provide the installation steps of your project.",
        name: "installation"

    },
    {
        type: 'input',
        message: "How your project can be useful to the user?",
        name: "usage"

    },
    {
        type: 'input',
        message: "list of collaborators if any.",
        name: "credit"

    },
    {
        type: 'list',
        message: "What licenses are required with this project?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]


    },
    {
        type: 'input',
        message: "any speacial feature/features of the project which you want to show. ",
        name: "features"

    },
    {
        message: "list of contributors.",
        name: "contributors"

    },
    {
        type: 'input',
        message: "write test for your application.",
        name: "test"

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./dist/" + fileName, data, err => {
        if (err) {
            return console.log(err);

        }
        console.log("README created successfully!");

    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))

        })
}

// Function call to initialize app
init();
