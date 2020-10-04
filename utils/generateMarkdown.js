// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, questions} = data;
  return `
# ${title} 
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Description 

## Table of Contents (Optional)
## Installation
## Usage 
## Credits
## License
## FAQ
`;
}

module.exports = generateMarkdown;
