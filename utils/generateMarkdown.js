// const api = require("./api.js");
const axios = require("axios");

function generateMarkdown(response) {
  //Using a regular expression to grab the name value and create a dynamic badge depnding on the user acquired!
  let badger = new RegExp (/( )/, "gmi");
  let string = response.name;
  let badging = string.replace(badger, "%20");
  //Creating my Structure for the Markdown
  return `
  # ${response.title}

  [![Generic Badge](https://img.shields.io/badge/User-${badging}-red.svg)](https://github.com/${response.username})
    
  # Description
    
  ${response.description}
    
  Table of Contents |
  ----------------- |
  Instalation Information |
  Usage Information |
  License |
  Contributors |
  Questions |
    
  # Installation
  ${response.install}
    
  # Usage
  ${response.usage}
    
  # License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
  # Contributors
  ${response.contributions}
    
  # Questions
  If you have any questions please contact me at at: ${response.email? response.email: "Email protected by github API"}
    
  My user is also linked at the top under the Generic Badge
    
  ![profile picture](${response.picture}' "Profile Picture")
  `;
}
  
module.exports = {
  generateMarkdown: generateMarkdown
}