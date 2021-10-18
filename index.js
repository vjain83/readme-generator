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
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username?',
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },

    {
        type: "input",
        message: "What is the projetc title name?",
        name: "title",
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'input',
        message: "Please Provide description about your project",
        name: "description",
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'input',
        message: "Please provide the installation steps of your project.",
        name: "installation",
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'input',
        message: "How your project can be useful to the user?",
        name: "usage",
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        },

    },
    {
        type: 'input',
        message: "list of collaborators if any else enter None.",
        name: "credit",
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }

    },
    {
        type: 'list',
        message: "license required for this project?",
        name: "license",
        choices:
            ["Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"],
        validate: (value) => {
            if (value) { return true } else { return 'i need a value to continue' }
        }


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
