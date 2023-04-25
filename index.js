// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {name: 'title',
    message: 'What is the title of your project?',
    type: 'input',},
    {name: 'description',
    message: 'What does this project do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contributing',
    message: 'Who contributed to this application?',
    type: 'input'},
    {name: 'testing',
    message: 'How do I test this application?',
    type: 'input'},
    {name: 'license',
    type: 'list',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']},
    {name: 'github',
    message: 'What is your GitHub username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your email address?',
    type: 'input'},
    {name: 'fileName',
    message: 'What is the name of your README file?',
    type: 'input'},
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating a README file...");
        writeToFile("README.md", generateMarkdown({ ...answers }));
    });
}
// Function call to initialize app
init();
