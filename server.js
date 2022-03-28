const inquirer = require("inquirer");
const { createDepartment } = require("./db");
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
          "Add a Role",
          "Add an Employee",
          "Quit app",
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
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          createEmployee();
          break;
        case "Edit Employee":
          break;
        case "Quit app":
          console.log("goodbye!");
          process.exit();
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
  let employeeChoices = "hello";
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the Employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "Whaty is the employee's last name",
      },
    ])
    .then((employeeNameResponse) => {
      db.findAllRoles().then(([roles]) => {
        const roleChoices = roles.map((role) => {
          return { name: role.title, value: role.id };
        });

        inquirer
          .prompt([
            {
              type: "list",
              name: "role_id",
              message: "What role for this employee?",
              choices: roleChoices,
            },
          ])
          .then((roleResponse) => {
            db.findAllEmployees().then(([rows]) => {
              employeeChoices = rows.map((row) => {
                return {
                  name: `${row.first_name} ${row.last_name}`,
                  value: row.id,
                };
              });

              inquirer
                .prompt([
                  {
                    type: "list",
                    message: "manager?",
                    name: "manager_id",
                    choices: employeeChoices,
                  },
                ])
                .then((managerResponse) => {
                  let newEmployee = {
                    first_name: employeeNameResponse.first_name,
                    last_name: employeeNameResponse.last_name,
                    role_id: roleResponse.role_id,
                    manager_id: managerResponse.manager_id,
                  };
                  db.createEmployee(newEmployee)
                    .then(() => {
                      console.log(
                        `Employee ${employeeNameResponse.first_name} ${employeeNameResponse.last_name}`
                      );
                    })
                    .then(() => {
                      director();
                    });
                });
            });
          });
      });
    });
}

function addRole() {
  db.findAllDepartments().then(([departments]) => {
    const departmentOptions = departments.map((department) => {
      return {
        value: department.id,
        name: department.name,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the role title?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the role salary?",
        },
        {
          type: "list",
          name: "department_id",
          message: "What is the role department ID?",
          choices: departmentOptions,
        },
      ])
      .then((role) => {
        db.createrole(role)
          .then(() => {
            console.log(`Succesfully added ${role.title}`);
          })
          .then(() => {
            director();
          });
      });
  });
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
}
