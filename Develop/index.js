// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//prompt for Project Name, Description, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Input your project title(Any illegal filename characters will be replaced by -): ",
    
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
    name: "contributing",
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
    choices: ["none", "Apache 2.0", "GNU v3.0", "MIT"],
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




// TODO: Create a function to write README file
function writeToFile(validFileName, readmeTemplate) 
{
  //avoid common illegal filename and directory characters
  
  
  try{
    fs.writeFileSync(`README_${validFileName}.md`, readmeTemplate)
  }
  catch(e) {
    console.log(e);
  }
}

// TODO: Create a function to initialize app
function init() {

const answers = inquirer.prompt(questions);
const validFileName = answers.title.trim().replaceAll("\\/:*?\"<>|s,&.!~@#$%^()+{}'`[]=", "-");

const readmeTemplate = generateMarkdown(answers);
writeToFile(validFileName,readmeTemplate);

}

// Function call to initialize app
init();
