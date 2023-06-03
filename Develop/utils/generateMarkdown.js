// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //["none", "Apache 2.0", "GNU v3.0", "MIT"],
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //["none", "Apache 2.0", "GNU v3.0", "MIT"],
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //["none", "Apache 2.0", "GNU v3.0", "MIT"],

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return ` 

  # ${data.title.trim()}

  ## Description

  ${data.description.trim()}

  ## Table of Contents

  - [${data.title}](#${data.title})
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${list.installation.trim()}

  ## Usage

  ${list.usage.trim()}
  
  ## License

  ${licenseSection}
  
  ## Badges

  ![${licenseBadge}](${licenseLink})

  ## Contruibution Guidelines

  ${list.contribution.trim()}

  ## Tests
  
  ${list.tests.trim()}
  
  `;
}

module.exports = generateMarkdown;
