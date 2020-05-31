cons fs = require("fs");

//set the answers to a varialbe called data
 function generateMarkdown(answers) {
   let data = 
   ![badge](${answers.badge})
   # ${answers.title}
 }



/*
The README will be populated with the following:

At least one badge
Project title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

User GitHub profile picture
User GitHub email */

function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
