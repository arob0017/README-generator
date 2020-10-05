// function to generate markdown for README
function generateMarkdown(data) {
    const {
        username,
        email,
        repo,
        title,
        description,
        image,
        installation,
        usage,
        tests,
        contributing,
        license,
    } = data;
    return `
# ${title} 
![Top language](https://img.shields.io/github/languages/top/${username}/${repo})
![License](https://img.shields.io/badge/license-${license}-green)

## Description 
![Demo image](${image})

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Installation
${installation}

## Usage 
${usage}

## Tests
${tests}

## Contributing
${contributing}

## Got questions?
Feel free to contact me @ github.com/${username}

For other inquiries, send me an email @ ${email}

## License 
${license}
`;
}

module.exports = generateMarkdown;