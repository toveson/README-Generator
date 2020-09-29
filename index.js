const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require('./utils/generateMarkdown');

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
    message: "What license does your project have?",
    choices:  [
      "Apache_License_2.0",
      "BSD_3-Clause_'New'_or_'Revised' license",
      "BSD_2-Clause_'Simplified_or_'FreeBSD'_license",
      "GNU_General_Public_License_(GPL)",
      "GNU_Library_or_'Lesser'_General_Public_License_(LGPL)",
      "MIT_license",
      "Mozilla_Public_License_2.0",
      "Common_Development_and_Distribution_License",
      "Eclipse_Public_License_version_2.0"
    ]
  },
  {
    //   Contributors
    type: "input",
    name: "contrbutors",
    message: "How can someone contribute to your project?"
  },
  {
    //   GitHub
    type: "input",
    name: "github",
    message: "Enter your GitHub Username"
  },
  {
    //   test 
    type: "input",
    name: "test",
    message: "How have you tested your project?"
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
  fs.writeFile(fileName, data, (error) => {
      if(error) {
          console.log(error);
      } else {
          console.log("Success");
      }
  })
}


// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(function(userResponse){ 
  const mdString = genMarkDown(userResponse)
  writeToFile('README.md', mdString)
  });
}

// function call to initialize program
init();
