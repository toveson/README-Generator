// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.Description}

  ## Table of Contents

  * [installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Credits](#credits)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Credits

  ## Tests
  npm test

  ## Questions
  If you have any questions please feel free to reach out to me at ${data.email}.

`;
}

module.exports = generateMarkdown;
