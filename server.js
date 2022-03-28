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
          "Add a Department",
        ],
      },
    ])
    .then(({ director }) => {
      switch (director) {
        case "View all employees":
          viewEmployees();
          break;
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "Add a Department":
          addDepartment();
          break;
        default:
          director();
      }
    });
}
function viewEmployees() {
  db.findAllEmployees()
    .then(([employees]) => {
      console.table(employees);
    })
    .then(() => {
      director();
    });
}

function viewRoles() {
  db.findAllRoles()
    .then(([roles]) => {
      console.table(roles);
    })
    .then(() => {
      director();
    });
}

function viewDepartments() {
  db.findAllDepartments()
    .then(([departments]) => {
      console.table(departments);
    })
    .then(() => {
      director();
    });
}

function createEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeFirstName",
      message: "What is the employees first name?",
    },
    {
      type: "input",
      name: "employeeLastName",
      message: "What is the employees last name?",
    },
    {
      type: "input",
      name: "employeeRoleId",
      message: "What is the employees role ID?",
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the department to add?",
      },
    ])
    .then((department) => {
      db.createDepartment(department)
        .then(() => {
          console.log(`Succesfully created ${department.name}`);
        })
        .then(() => {
          director();
        });
    });
  //Add then method and push new info to table
  //Create a "do more" function once complete to cycle through add' q's
}
