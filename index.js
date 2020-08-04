const inquirer = require("inquirer");
const table = require("console.table");
const db = require("./database");
var mysql = require("mysql");

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

// Function to view all employees
async function viewEmployees() {
  var employees = await db.viewEmployees();
  console.table(employees);
  console.log("You are viewing all employees.");
  // Call function to go back to the questionnaire
  mainMenu();
}

// Function to view a department
function viewDepartment() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    console.log;
  });
}

// Function to view employees by manager viewManager

// Function to add an employee addEmployee

// Function to remove an employee removeEmployee

// Function to update an employee's role updateRole

// Function to update an employee's manager updateManager

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

// use map on view employees by department; update employee role; anytime there are multiple categories - anytime inquirer is used

// For an extended version
// const { prompt } = require("inquirer");
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
