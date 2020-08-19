const fs = require("fs");
const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your ReadMe?",
  },
  {
    type: "input",
    name: "description",
    message: "What does your ReadMe do?",
  },
  {
    type: "checkbox",
    name: "tableofcontents",
    choices: [
      "Title" + "\n",
      "Description" + "\n",
      "Table of Contents" + "\n",
      "Installation" + "\n",
      "License" + "\n",
      "Contributing" + "\n",
      "Test" + "\n",
      "Questions",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this app?",
  },

  {
    type: "checkbox",
    name: "license",
    choices: ["Apache", "MIT"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What is allowed on this site?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you run this code?",
  },
  {
    type: "input",
    name: "questions",
    message: "Do you have any questions?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers.title);
  const readMe = `${answers.title}  \n
 ${answers.description} \n 
  ${answers.tableofcontents} \n
  ${answers.installation} \n
  ${answers.license} \n
  ${answers.contributing} \n
  ${answers.test} \n
  ${answers.questions}
  `;

  fs.writeFile("readme.md", readMe, (err) => console.log(err || "success!"));
});
