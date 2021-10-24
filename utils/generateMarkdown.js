function renderLicenseBadge(license) {
  if (license == "") {
    return ""
  }

  return `https://img.shields.io/badge/License-${license}-yellow.svg`
}

function renderLicenseLink(license) {
  if (license == "") {
    return ""
  }

  return `https://opensource.org/licenses/${license}`
}

function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `[![badge](${licenseBadge})](${licenseLink})`
}


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
${renderLicenseSection(data.license)}

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
