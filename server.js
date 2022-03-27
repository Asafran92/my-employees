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
