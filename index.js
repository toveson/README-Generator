const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require('./utils/generateMarkdown')

const licenseList = [];


// array of questions for user
const questions = [
    {
        // Porject title 
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        //   project discription 
        type: "input",
        name: "Description",
        message: "Givew a discription of your project."
      },
      {
        //   Installation ---What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
        type: "input",
        name: "install",
        message: "How do you install your project?"
      },
      {
        //   usage ---Provide instructions and examples for use. Include screenshots as needed.
        type: "input",
        name: "usage",
        message: "Explain how to use your project"
      },
      {
        //   License ---this needs to be a list of choices
        type: "list",
        name: "license",
        message: "What license does your project have?"
        // choices: licenseList
      },
      {
        //   GitHub
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        //   Contributors
        type: "input",
        name: "contrbutors",
        message: "Enter your GitHub Username?"
      },
      {
        //   test 
        type: "input",
        name: "test",
        message: "Where are you from?"
      },
      {
        //   GitHub username 
        type: "input",
        name: "GitHubUN",
        message: "What is your GitHub username?"
      },
      {
        //   Email address
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  then(function(generateMarkdown){
    const md = generateMarkdown(answers);
    return writeFileAsync('README.md', md)
  })
  .then(function() {
    console.log('wrote README.md successfully');
  })
  .catch(function(err) {
    console.log(err);
  })
}

// function call to initialize program
init();
