// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        name: 'github',  
    },

    {
        type: 'input',
        message: "Describe the purpose of this project?",
        name: 'description',
    
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
        type: 'list',
        message: "Choose a license for this project.",
        name: 'license',
        //only want select number of choices for this section
        choices: ['MIT', 'Boost', 'Apache', 'BSD', 'None']
        
    },


]

    
//Create a function to write README file
//redefine with later data
//if file path doesnt exist create it
function writeToFile(fileName, data) {

    //only take in two parameters, will create a new file if one does not exist, join all the segments into one path, and grab the data
   return fs.writeFileSync((fileName), data);
    
}
    
    // TODO: Create a function to initialize app
    function init() {
        inquirer
        .prompt(questions).then((response) => {
            console.log('README has been successfully generated!')
            //paste answers onto the generated readme file and where you get data from
            writeToFile('GENERATEDREADME.md', generateMarkdown({...response}));
        
    });
}



// Function call to initialize app
init();
