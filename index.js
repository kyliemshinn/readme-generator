// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = ('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What is the name of your repository?",
        name: 'title',
    },

    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',  
    },

    {
        type: 'input',
        message: "Describe the purpose of this project?",
        name: 'description ',
    
    },

    {
        type: 'input',
        message: "What are the steps to install this project?",
        name: 'installation',
    },

    {
        type: 'input',
        message: "What is the intended use of this project?",
        name: 'use',
    },

    {
        type: 'input',
        message: "Who are the contributors to this project?",
        name: 'contributors',
        
        
    },

    {
        type: 'input',
        message: "How do you run tests with this app?",
        name: 'test',
      
    },

    {
        type: 'input',
        message: "Choose a license for this project.",
        name: 'project',
        choices: ['MIT', 'Boost', 'Apache', 'BSD']
        
    },


]

.then((response) => {
    console.log(response)

})
    
//Create a function to write README file
//redefine with later data
function writeToFile(generateMarkdown, response) {

//taking in the file, the data, and the callback
    fs.writeFile(generateMarkdown, response, (err) => {
        // console log error if there is a known error
        (err) ? console.log(err) : console.log('README has been succfessfully generated!')
    }
)}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((response) => {
        //paste answers onto the generated readme file
        writeToFile('generatereadme.md', response)
    })
}



// Function call to initialize app
init();
