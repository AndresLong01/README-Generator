function generateMarkdown(data) {
  return `
  # ${data.title}
  [![Generic Badge](https://img.shields.io/badge/User-Andres%20Long-red.svg)](https://github.com/${data.username})

  # Description
  ${data.description}

  Table of Contents |
  ----------------- |
  Instalation Information |
  Usage Information |
  License |
  Contributors |
  Questions |

  # Installation
  ${data.install}

  # Usage
  ${data.usage}

  # License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # Contributors
  ${data.contributions}

  # Questions
  If you have any questions please contact me at at: ${data.email ? data.email : "e-mail address is protected"}

  My user is also linked at the top under the Generic Badge

  ![profile picture](${data.image} "Profile Picture")
  `;
}

module.exports = generateMarkdown;
