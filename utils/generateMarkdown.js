// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Constributing](#contributor)
  * [Tests](#test)
  * [Questions](#questions)
  ### Installation:
  ${data.installation}
  ### Usage:
  ${data.usage}
  ### License:
  This product is licensed under:
  ${data.license}
  ### Contributing:
  ${data.contributor}
  ### Testes:
  ${data.test}
  ### Features:
  ${data.features}
  ### Questions:
  If you have any questions contact me on [GITHUB](https://github.com/${data.github}) or contact ${data.name} at ${data.email}

    `;

}


module.exports = generateMarkdown;
