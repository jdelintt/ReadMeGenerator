const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
inquirer
  .prompt([
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
      type: "inpu",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers.title);
    console.info(answers.description);
  });
// array of questions for user
const questions = [];

// // function to write README file
function writeToFile(fileName, data) {}

// // function to initialize program
function init() {}

// // function call to initialize program
init();
