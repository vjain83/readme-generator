const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?",
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username?',
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },
    {
        type: 'input',
        name: 'githubreponame',
        message: 'Enter the Github Repository name to create a badge.',
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },

    {
        type: "input",
        message: "What is the project title?",
        name: "title",
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },
    {
        type: 'editor',
        message: "Please provide description about your project.",
        name: "description",
        validate: (description) => {
            if (description) { return true } else { return 'I need a description to continue' }
        }

    },
    {
        type: 'input',
        message: "Please provide the installation steps of your project.",
        name: "installation",
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }

    },
    {
        type: 'input',
        message: "Please provide usage information?",
        name: "usage",
        validate: (value) => {
            if (value) { return true } else { return 'I need a value to continue' }
        }
    },
    {
        type: 'list',
        message: "License for this project?",
        name: "license",
        choices:
            ["Apache",
                "Academic",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ],
        default: "None"
    },
    {
        type: 'input',
        message: "List of contributors?",
        name: "contributors",
        default: "None"
    },
    {
        type: 'input',
        message: "How to test your application?",
        name: "test",
        default: "None"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile("./dist/" + fileName, data, err => {
        if (err) {
            return console.log(err);

        }
        console.log("README created successfully!");

    })

}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))

        })
}

// Function call to initialize app
init();
