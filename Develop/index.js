const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt({
  message: "Enter your GitHub username:",
  name: "username",
  message: "Provide a description of your project",
  name: "description",
  message: "How do I install this program?",
  name: "install",
});
// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
