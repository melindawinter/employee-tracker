const inquirer = require("inquirer");
const table = require("console.table");
const db = require("./database");
const mysql = require("mysql");

//   Start app by calling first function
mainMenu();

// This first function sets up the task the user wants to perform
async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Hello. Which management task would you like to perform?",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },

        {
          name: "Add an employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove an employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update an employee's role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },

        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove a role",
          value: "REMOVE_ROLE",
        },
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove a department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);
  // Call the appropriate function depending on which task the user wants to perform
  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return updateRole();
    case "VIEW_ROLES":
      return viewRoles();
    case "ADD_ROLE":
      return addRole();
    case "REMOVE_ROLE":
      return removeRole();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "ADD_DEPARTMENT":
      return addDepartment();
    case "REMOVE_DEPARTMENT":
      return removeDepartment();
    default:
      return quit();
  }
}

// Functions for employees

// Function to view all employees
async function viewEmployees() {
  const employees = await db.viewEmployees();
  console.table(employees);
  console.log("You are viewing all employees.");
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to add an employee
async function addEmployee() {
  const employee = await inquirer.prompt([
    {
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      name: "role_id",
      message: "What is the employee's role id?",
    },
  ]);
  await db.addEmployee(employee);
  console.log(`Added ${employee.first_name} to the database`);
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to remove an employee
async function removeEmployee() {
  const employees = await db.viewEmployees();
  const employeeChoices = employees.map(({ first_name, last_name }) => ({
    name: first_name,
    name: last_name,
  }));
  const { employee } = await inquirer.prompt([
    {
      type: "list",
      name: "employee",
      message: "Which employee do you want to delete?",
      choices: employeeChoices,
    },
  ]);
  await db.removeEmployee(employee);
  console.log(`Removed the employee from the database`);
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to update an employee's role
async function updateRole() {}

// Functions for roles

// Function to view all roles
async function viewRoles() {
  const roles = await db.viewRoles();
  console.table(roles);
  console.log("You are viewing all roles.");
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to add a role
async function addRole() {
  const departments = await db.viewDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  const role = await inquirer.prompt([
    {
      name: "title",
      message: "What is the name of the role?",
    },
    {
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department does the role belong to?",
      choices: departmentChoices,
    },
  ]);
  await db.addRole(role);
  console.log(`Added ${role.title} to the database`);
  mainMenu();
}

// Function to remove a role
async function removeRole() {}

// Functions for departments

// Function to view all departments
async function viewDepartments() {
  const departments = await db.viewDepartments();
  console.table(departments);
  console.log("You are viewing all departments.");
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to add a department
async function addDepartment() {
  const departments = await db.viewDepartments();
  // const departmentChoices = departments.map(({ id, name }) => ({
  //   name: name,
  //   value: id,
  // }));
  const department = await inquirer.prompt([
    {
      name: "name",
      message: "What is the name of the department you want to add?",
    },
  ]);
  await db.addDepartment(department);
  console.log(`Added ${department.name} to the database`);
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to delete a department
async function removeDepartment() {
  const departments = await db.viewDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  const { departmentId } = await inquirer.prompt([
    {
      type: "list",
      name: "departmentId",
      message: "Which department do you want to remove?",
      choices: departmentChoices,
    },
  ]);
  await db.removeDepartment(departmentId);
  console.log(`Removed ${department.name} from the database`);
  // Call function to go back to the questionnaire
  mainMenu();
}

// For an extended version
// {
//   name: "View All Employees By Department",
//   value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
// },
// {
//   name: "View All Employees By Manager",
//   value: "VIEW_EMPLOYEES_BY_MANAGER",
// },
// {
//   name: "Update Employee Manager",
//   value: "UPDATE_EMPLOYEE_MANAGER",
// },

// case "VIEW_EMPLOYEES_BY_DEPARTMENT":
//   return viewEmployeesByDepartment();
// case "VIEW_EMPLOYEES_BY_MANAGER":
//   return viewEmployeesByManager();
// case "UPDATE_EMPLOYEE_MANAGER":
//   return updateEmployeeManager();
