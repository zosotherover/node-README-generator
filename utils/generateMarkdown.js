cons fs = require("fs");

//set the answers to a varialbe called data
 function generateMarkdown(answers) {
   let data = `
   ![badge](${answers.badge})
   # ${answers.title}
 






   `;
   

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

// write data from answers to ReadMe.md file
fs.writeFile("ReadMe.md", data, (err)=> {
  if (err) {
    throw err;
  }
  console.log("your file was saved to README");
})
}
module.exports = generateMarkdown;