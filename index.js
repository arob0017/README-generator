const fs = require("fs");
const inquirer = require("inquirer");
// const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")

// writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title:"
    },
    {
        type: "input",
        name: "description",
        message: "Description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage:"
    },
    {
        type: "input",
        name: "license",
        message: "License:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests:"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions:"
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
