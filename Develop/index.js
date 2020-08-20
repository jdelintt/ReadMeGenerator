const fs = require("fs");
const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your contact email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your repository title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of your repository?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation steps for your repository?",
  },
  {
    type: "input",
    name: "usage",
    message: "How does one use your repository?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your respository?",
    choices: ["Apache", "MIT"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the rules for contributing to your respository?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test your repository?",
  },
];

inquirer.prompt(questions).then((answers) => {
  const readMe =
    `# ${answers.title}  \n` +
    `![License - ${answers.license}](https://img.shields.io/badge/license-${answers.license}-success)\n` +
    "\n" +
    `${answers.description}\n` +
    "\n" +
    `## Table of Contents\n` +
    "\n" +
    `* [Installation](#installation)\n` +
    `* [Usage](#usage)\n` +
    `* [License](#license)\n` +
    `* [Contributing](#contributing)\n` +
    `* [Tests](#tests)\n` +
    `* [Questions](#questions)\n` +
    "\n" +
    `## Installation\n` +
    "\n" +
    `${answers.installation}\n` +
    `## Usage\n` +
    "\n" +
    `${answers.usage}\n` +
    `## License\n` +
    "\n" +
    `Licensed under the ${answers.license} license.\n` +
    `## Contributing\n` +
    "\n" +
    `${answers.contributing}\n` +
    "\n" +
    `## Tests\n` +
    "\n" +
    `${answers.test}\n` +
    "\n" +
    `## Questions\n` +
    "\n" +
    `[GitHub](https://github.com/${answers.username})\n` +
    "\n" +
    `[Email](mailto:${answers.email})\n`;
  fs.writeFile("README.md", readMe, (err) => console.log(err || "success!"));
});
