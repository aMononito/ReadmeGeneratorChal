// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License\nThis project is licensed under the ${license} license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
# Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
## Description
  ### ${data.description} 
## Installation
  ### ${data.installation} 
## Usage
  ### ${data.usage} 
### License
  ${data.license}
  * renderLicenseBadge(data.license)
  * renderLicenseLink(data.license)
  * renderLicenseSection(data.license)
### Contributing
  ${data.contributing} 
### Tests
  ${data.tests} 
# Questions
  ${data.questions} ### GitHub Username ${data.username} ### Email Address ${data.email}
`;
}


//Optional Code for screenshots and video links - create an assets/images
// add following code in section of generateMarkdown function
// ```md ![alt text](assets/images/screenshot.png) ```
export default generateMarkdown;
