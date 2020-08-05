var connection = require("./connection");

class DataBase {
  constructor(connection) {
    this.connection = connection;
  }

  // View all employees
  viewEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  // Add an employee
  addEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  // Remove an employee
  removeEmployee(employeeId) {
    return this.connection.query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  // Update an employee's role
  updateRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  // View all roles
  viewRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id"
    );
  }

  // Add a role
  addRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  // Remove a role
  removeRole(roleId) {
    return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
  }

  // View all departments
  viewDepartments() {
    return this.connection.query("SELECT * FROM department");
  }

  // Add a department
  addDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

  // Remove a department
  removeDepartment(departmentId) {
    return this.connection.query(
      "DELETE FROM department WHERE id = ?",
      departmentId
    );
  }
}

module.exports = new DataBase(connection);

// For future versions
// View employees by their departments
//   viewByDepartment()

//   View employees under a specific manager
//   viewByManager()

// Update an employee's manager
// updateManager()
