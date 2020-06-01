//require inquirer package:
const inquirer = require("inquirer");

//require generateMarkdown.js:

const generateMarkdown = require("./utils/generateMarkdown");

//The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
//This will be an array of questions:

const questions = [
  //enter a badge
  {
    type: "input",
    name: "badge",
    message: "Please enter a badge:",
  },

  //What is your Project title? [string]
  {
    type: "input",
    name: "title",
    message: "Please enter a project title:",
  },

  //What is your Description? [string]
  {
    type: "input",
    name: "badge",
    message: "Please enter a description of your project:",
  },

  //What is your Table of Contents? [Array:string] or an object
  {
    type: "input",
    name: "badge",
    message: "Please enter a badge:",
  },

  //How to install: [string]

  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions for your application:",
  },

  //What is your Usage? [string]
  {
    type: "input",
    name: "usage",
    message: "Please enter usage instructions:",
  },

  //What is your License?
  {
    type: "input",
    name: "license",
    message: "Please enter a license for your application:",
  },

  //Who are the contributors? Array of strings
  {
    type: "input",
    name: "contributors",
    message: "Please enter all of the contributors to your project:",
  },

  //What are your Tests? [string] (markdown formatted?)
  {
    type: "input",
    name: "tests",
    message: "Please enter the tests done on your application:",
  },

  // User GitHub profile picture? [string] (image url?)
  {
    type: "input",
    name: "profilePic",
    message: "Please upload your profile picture:",
  },

  // User GitHub email? [string]
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
];

//function writeToFile(fileName, data) {
  // where do I want the file to be placed? desktop? local directory? do I need to check?
  //create a file with the name fileName
  //write to file fielName the data
}

//initialize prompt
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    // after getting the answers call the generateMarkdown function
    generateMarkdown(answers);
  });
}

init();
