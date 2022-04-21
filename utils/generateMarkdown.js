// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string/ adding the styling for how it would be presented in markdown dependent on the license chosen
// take link for the  render link to the  show on
//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
function renderLicenseBadge(license) {
    if(license !== 'None') {

      return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  
  } 
    return '';
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  if(license !== 'None') {

    return `[License](#license)`;

  }
    return " ";
  }
  
  // TODO: Create a function that returns the license section of README
  // setting what the top section will look like in read me when displayed with a license
  function renderLicenseSection(license) {
    if(license !== 'None') {
      return `## License ` 
    }return " ";
  }
      
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
# ${data.title}
  
${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
  
${renderLicenseLink(data.license)}
    
 ## Table of Contents
  
- [Description](#Description)

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributors](#Contributors)

- [Tests](#Tests)

- [Questions](#Questions)
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.use}
  
  
  ## Tests 
  
  ${data.test}
  
  ## Contributors
  
  ${data.contributors}
  
  ## Questions
  
  For additional information please contact me at ${data.email}

  GitHub: ${data.github}

  `;
  }
  
  module.exports = generateMarkdown;
  