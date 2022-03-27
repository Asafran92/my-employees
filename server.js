const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

console.log("Welcome to the employee database");
director();
function director() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "director",
        message: "What would you like to do next",
        choices: [
          "View all employees",
          "View all departments",
          "View all roles",
        ],
      },
    ])
    .then(({ director }) => {
      switch (director) {
        case "View all employees":
          console.log("view all employees");
          break;
        case "View all departments":
          console.log("View all departments");
          break;
        case "View all roles":
          console.log("View all roles");
          break;
        default:
          director();
      }
    });
}
function createEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "Employee First Name",
      message: "What is the employees first name?",
    },
    {
      type: "input",
      name: "Employee Last Name",
      message: "What is the employees last name?",
    },
  ]);
  //Add then method and push new info to table
  //Create a "do more" function once complete to cycle through add' q's
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "employee title",
      message: "What is the title?",
    },
    {
      type: "input",
      name: "employee salary",
      message: "What is the employees salary?",
    },
    {
      type: "input",
      name: "employee department ID",
      message: "What is the employees department ID?",
    },
  ]);
  //Add then method and push new info to table
  //Create a "do more" function once complete to cycle through add' q's
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "employee title",
      message: "What is the title?",
    },
  ]);
  //Add then method and push new info to table
  //Create a "do more" function once complete to cycle through add' q's
}
