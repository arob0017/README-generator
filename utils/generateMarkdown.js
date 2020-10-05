// function to generate markdown for README
function generateMarkdown(data) {
    const {
        username,
        repo,
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        feedback
    } = data;
    return `
# ${title} 
![GitHub top language](https://img.shields.io/github/languages/top/${username}/${repo})

## Description 
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [Feedback](#feedback)
* [License](#license)

## Installation
${installation}

## Usage 
${usage}

## Tests
${tests}

## Contributing
${contributing}

## Feedback
${feedback}

## License ![GitHub](https://img.shields.io/github/license/${username}/${repo})
${license}
`;
}

module.exports = generateMarkdown;