const fs = require("fs");

const inquirer = require("inquirer");
("use strict");

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
    choices: ["Index", new inquirer.Separator(), "indexA"],
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this app?",
  },

  {
    type: "list",
    name: "license",
    message: ["Choice1", "Choice2"],
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
  console.log("\nOrder receipt:");
  console.log(JSON.stringify(answers, null, "  "));
});
