// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("domain");

// An  array of questions for user input
//prompt for Project Name, Description, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "Input your project title(Any illegal filename characters will be replaced by -): ",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title name for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Please write a description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please specify contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provide details on tests written for the project and instructions on how to run them.",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license used for this project.",
    choices: ["none","Apache2.0","GPL","MIT"],
  },
  {
    type: "input",
    name: "name",
    message: "Provide code owner's name:",
  },
  {
    type: "input",
    name: "username",
    message: "Provide your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message:
      "Provide an e-mail address for others to reach out to you for additional questions:",
  },
];

// A function to write README file
function writeToFile(validFileName, data) 
{
  //avoid common illegal filename and directory characters
 
  fs.writeFileSync(`README_${validFileName}.md`, data,(err) => {if(err) throw err;});

}

// A function to initialize app
async function init() 
{
  const answers = await inquirer.prompt(questions,{firstOnly:false});
  let validFileName = answers.title.trim().toLowerCase().replaceAll(/\s/g, "-");
  validFileName = validFileName.toLowerCase().replaceAll(/[\\/:*?\"<>|]/g, "");
  
  const createMD = generateMarkdown(answers);
  try {
    writeToFile(validFileName,createMD);
    console.log(`README_${validFileName}.md was created successfully. Find it in the same directory for your new README file`);
  }
  catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
