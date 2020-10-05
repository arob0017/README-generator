const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "GitHub Username:",
        default: "username"
    },
    {
        type: "input",
        name: "email",
        message: "Email address:",
        default: "email"
    },
    {
        type: "input",
        name: "repo",
        message: "GitHub repository name:",
        default: "README-generator"
    },
    {
        type: "input",
        name: "title",
        message: "Title:",
        default: "Title"
    },
    {
        type: "input",
        name: "image",
        message: "Demo image URL/filepath:",
        default: "https://picsum.photos/300/200"
    },
    {
        type: "input",
        name: "description",
        message: "Project description:",
        default: "Description"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions:",
        default: "Installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information:",
        default: "Usage"
    },
    {
        type: "input",
        name: "tests",
        message: "Test instructions:",
        default: "Tests"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contribution guidelines:",
        default: "Contributing"
    },
    {
        type: "input",
        name: "license",
        message: "License:",
        default: "Free for use 🙂"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, data) => {
        return err ? err : data
    })
}

// function to initialize program
async function init() {
    console.log(
`--------------------------------------------------------
THE PROFESSIONAL README GENERATOR

Please input info about your README info at the prompts 
to create your own professional README.md!
--------------------------------------------------------`);

    try {
        const answers = await inquirer.prompt( questions );
        console.log(answers);
        const readme = generateMarkdown( answers );

        writeToFile("testREADME.md", readme)
    } catch(err) {
        console.log(`Error: ${err}`)
    }
}

// function call to initialize program
init();
