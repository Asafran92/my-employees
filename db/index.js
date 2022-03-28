const connection = require("./connection");
class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }
  findAllRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }
  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }
  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  createrole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
}

module.exports = new DB(connection);
