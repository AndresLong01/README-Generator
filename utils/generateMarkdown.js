const api = require("./api.js");
const axios = require("axios");

function generateMarkdown(response) {
  return `
  # ${response.title}

  [![Generic Badge](https://img.shields.io/badge/User-Profile-red.svg)](https://github.com/${response.username})
    
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
  If you have any questions please contact me at at: ${response.email}
    
  My user is also linked at the top under the Generic Badge
    
  ![profile picture](https://avatars3.githubusercontent.com/u/58584090?v=4' "Profile Picture")
  `;
}
  
module.exports = {
  generateMarkdown: generateMarkdown
}