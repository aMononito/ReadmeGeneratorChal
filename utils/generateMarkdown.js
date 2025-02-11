// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the ${license} license.`;
}

// TODO (Optional): Create a function to link GitHub profile based off of username
function renderGitHubLink(username) {
  return `[${username}]https://github.com/${username}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# **${data.title}** __________________________________________________________________ ${renderLicenseBadge(data.license)}
## Description
  ### ${data.description} 
## Table of Contents
>Please use the table of contents below to navigate through the README
>>1. [Description](#Description)
>>2. [Installation](#Installation)
>>3. [Usage](#Usage)
>>4. [License](#License)
>>5. [Contributing](#Contributing)
>>6. [Tests](#Tests)
>>7. [Questions](#Questions)

## Installation
  > *${data.installation}*
## Usage
  ### ${data.usage} 
## License - ${data.license}
* ${renderLicenseBadge(data.license)}
* ${renderLicenseLink(data.license)}
* ${renderLicenseSection(data.license)}
## Contributing
  ### ${data.contributing} 
## Tests
  ### ${data.tests} 
# Questions

>* ${data.questions} 
>>* GitHub Username: ${renderGitHubLink(data.username)} 
>>* Email Address ${data.email}
`;
}


//Optional Code for screenshots and video links - create an assets/images
// add following code in section of generateMarkdown function
// ```md ![alt text](assets/images/screenshot.png) ```
export default generateMarkdown;
