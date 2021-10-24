// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderlicenseBadge(license) {
//   if (!license) {
//     return '';
//   }
//   return `
//   ${data.license}`
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!licenseLink) {
//     return '';

//   }
//   return ` {
//     ${data.license}
//   }`
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }


function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/github/languages/top/${data.github}/${data.githubreponame})<br />
${data.description}

  ## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation:
${data.installation}

### Usage:
${data.usage}

### License:
[![badge](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

### Contributing:
${data.contributors}

### Tests:
${data.test}

### Questions:
If you have any questions email me or reach out on:
* ${data.name} - ${data.email}
* [Github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
