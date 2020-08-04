const inquirer = require("inquirer");
const table = require("console.table");
const db = require("./database");
var mysql = require("mysql");

// const { prompt } = require("inquirer");

//   Start app by calling first function
mainMenu();

async function mainMenu() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "View All Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);
  // Call the appropriate function depending on what the user chose
  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return viewEmployeesByManager();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    case "UPDATE_EMPLOYEE_ROLE":
      return updateEmployeeRole();
    case "UPDATE_EMPLOYEE_MANAGER":
      return updateEmployeeManager();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "ADD_DEPARTMENT":
      return addDepartment();
    case "REMOVE_DEPARTMENT":
      return removeDepartment();
    case "VIEW_ROLES":
      return viewRoles();
    case "ADD_ROLE":
      return addRole();
    case "REMOVE_ROLE":
      return removeRole();
    default:
      return quit();
  }
}

// This first function sets up the task the user wants to perform
async function mainMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "manage",
      message: "Hello. Which management task would you like to perform?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "Add an employee",
        "Remove an employee",
        "Update an employee's role",
        "Update an employee's manager",
        "Quit",
      ],
    })
    .then(answers => {
      console.log(answers.manage);
      // Switch statement to redirect to next portion of the questionnaire depending on the answer
      switch (answers.manage) {
        case "View all employees":
          viewAll();
          break;

        case "View all employees by department":
          viewDepartment();
          break;

        case "View all employees by manager":
          viewManager();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Remove an employee":
          removeEmployee();
          break;

        case "Update an employee's role":
          updateRole();
          break;

        case "Update an employee's manager":
          updateManager();
          break;

        default:
          return quit();
      }
    });
}

// Function to view all employees
async function viewEmployees() {
  var employees = await db.viewEmployees();
  console.table(employees);
  console.log("You are viewing all employees");
  // Call function to go back to the questionnaire
  initialQuestion();
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
  const departments = await db.findAllDepartments();
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
  await db.createRole(role);
  console.log(`Added ${role.title} to the database`);
  initialQuestion();
}

// use map on view employees by department; update employee role; anytime there are multiple categories - anytime inquirer is used
