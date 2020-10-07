const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
	{
		type: "input",
		name: "username",
		message: "GitHub Username:",
		default: "gituser",
	},
	{
		type: "input",
		name: "email",
		message: "Email address:",
		default: "smith@example.com",
	},
	{
		type: "input",
		name: "repo",
		message: "GitHub repository name:",
		default: "repository-name",
	},
	{
		type: "input",
		name: "title",
		message: "Title:",
		default: "My Title",
	},
	{
		type: "input",
		name: "image",
		message: "Demo image URL/filepath:",
		default: "https://picsum.photos/500/100",
	},
	{
		type: "input",
		name: "description",
		message: "Project description:",
		default: "This is my project",
	},
	{
		type: "input",
		name: "installation",
		message: "Installation instructions:",
		default: "none",
	},
	{
		type: "input",
		name: "usage",
		message: "Usage information:",
		default: "none",
	},
	{
		type: "input",
		name: "tests",
		message: "Test instructions:",
		default: "none",
	},
	{
		type: "input",
		name: "contributing",
		message: "Contribution guidelines:",
		default: "Contributions welcome 🙂",
	},
	{
		type: "list",
		name: "license",
		message: "License:",
		choices: [
			"Apache license 2.0",
			"GNU General Public License v3.0",
			"MIT",
			'BSD 2-clause "Simplified" license',
			'BSD 3-clause "New" or "Revised" license',
			"Boost Software License 1.0",
			"Creative Commons Zero v1.0 Universal",
			"Eclipse Public License 2.0",
			"GNU Affero General Public License v3.0",
			"GNU General Public License v2.0",
			"GNU Lesser General Public License v2.1",
			"Mozilla Public License 2.0",
			"The Unlicense",
		],
	},
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err, data) => {
		return err ? err : data;
	});
}

// function to initialize program
async function init() {
	console.log(
		`--------------------------------------------------------
THE PROFESSIONAL README GENERATOR

Please input info about your README info at the prompts 
to create your own professional README.md!
--------------------------------------------------------`
	);

	try {
		const answers = await inquirer.prompt(questions);
		const readme = generateMarkdown(answers);

		writeToFile("sample-README.md", readme);
		console.log(`
        Success! A README.md file was created.`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

// function call to initialize program
init();
