// TODO: Include packages needed for this application
const inquirer = ("inquirer")
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What is the name of your repository?",
        name: 'repo name',
        check: function (answer) {
// could potentially also try !answer???
            if (answer.length < 1) {
                return console.log("Please enter the Github repository name.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the Github username.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Describe the purpose of this project?",
        name: 'description',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description of your project.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Describe the purpose of this project?",
        name: 'description',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description of your project.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What are the steps to install this project?",
        name: 'installation',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input installation features.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is the intended use of this project?",
        name: 'Use',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input usage features.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Who are the contributors to this project?",
        name: 'contributors',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input contributors.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "How do you run tests with this app?",
        name: 'test',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input test features.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Choose a license for this project.",
        name: 'project',
        check: function (answer) {
            if (answer.length < 1) {
                return console.log("Please choose a license.");
            }
            return true;
        }
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // fs.writeFile('README.md', data, err => {
    //     // console log error if there is a known error
    //     (err) ? console.log(err) : console.log('README has been succfessfully generated!')
    // }
}

// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
