const licenseURL = {
  MIT: "https://opensource.org/license/mit/",
  GPL: "https://opensource.org/license/gpl-3-0/",
  Apache2: "https://opensource.org/license/apache-2-0/",
};
const dayjs = require("dayjs");
yearAtTimeOfCreation = dayjs().format("YYYY");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if (!license) {
    return ``;
  } else if (license == "MIT") {
    return `[![MIT License](https://img.shields.io/badge/License-${license}-lightgrey.svg)](${licenseURL.MIT})`;
  } else if (license == "GPL") {
    return `[![MIT License](https://img.shields.io/badge/License-${license}-lightgrey.svg)](${licenseURL.GPL})`;
  } else if (license == "Apache2.0") {
    return `[![MIT License](https://img.shields.io/badge/License-${license}-lightgrey.svg)](${licenseURL.Apache2})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "") 
  return ``;
  if (license == "MIT") 
    return licenseURL.MIT.toString();
  if (license == "GPL") 
  return licenseURL.GPL.toString();
  if (license == "Apache2.0") return licenseURL.Apache2.toString();
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if (license === "none") {
    return `This Application is not licensed`;
  }
  
  if (license == "MIT") {
    return `
    ** MIT **
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      **Disclaimer**
      This is only a short summary of the Full Text. No information on this Readme is legal advice.
    `;
  }
  if (license == "GPL") {
    return `
    ** GPL **
    You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.
    **Disclaimer**
    This is only a short summary of the Full Text. No information on Readme is legal advice.
    View the full text at: https://www.gnu.org/licenses/gpl-3.0.en.html
    `;
  }
  if (license == "Apache2.0") {
    return `
    ** Apache2.0 **
    You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.
    **Disclaimer**
    This is only a short summary of the Full Text. No information on Readme is legal advice.
    View the full text at: https://www.apache.org/licenses/LICENSE-2.0.txt
    `;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
{
  const licenseSection = renderLicenseSection(data.license);
  
  const licenseBadge = renderLicenseBadge(data.license);
    
  const licenseLink = renderLicenseLink(data.license);
  

  return ` 

  # ${data.title} 

  ${licenseBadge} copyright(c) ${yearAtTimeOfCreation}

  ## Description

  ${data.description}

  ## Table of Contents

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

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${licenseSection}

 *Link to the full text of the license: ${licenseLink}

  ## Badges

  ${licenseBadge}

  ## Contruibution Guidelines

  ${data.contribution}

  ## Tests
  
  ${data.tests}
  
  ## Questions

  Have any questions about this project or need additional help?
  Get help from the community: [Post a message in our discussion board](https://github.com/jenho-webdev/Awsome_README_Generator/discussions)
  Reach out to me on Github: https://github.com/${data.username} 
  Email me @ ${data.email}

  ## Credits

  ${data.name} copyright(c) ${yearAtTimeOfCreation}

  `;
}

module.exports = generateMarkdown;
