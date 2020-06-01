cons fs = require("fs");

//set the answers to a varialbe called data
 function generateMarkdown(answers) {
   let data = `
   ![badge](${answers.badge})
   # ${answers.title}
 
  #Table of Contents: 
  *[Description](#description)
  *[Installation Instructions](#installation-instructions)
  *[Usage Instructions](#usage-instructions)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Contact](#contact)

  #Description

  ${answers.descriptions}
  # Installation Instructions:


  ${answers.installation}
  #Usage Instructions: 



  ${answers.usage}
  # License:


  ${answers.license}
  # Contributors: 


  ${answers.contributors}
  # Tests: 


  ${answers.tests}
  #Contact: 
  ![anImage](${answers.profilePic})

  ## Email: <${answers.email}>



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