const inquirer = require("inquirer");
const table = require("console.table");

var mysql = require("mysql");

//   Start app by calling first function
initialQuestion();
// This first function sets up the task the user wants to perform
function initialQuestion() {
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
          connection.end();
          break;
      }
    });
}

// Function to view all employees
function viewAll() {
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    console.log("You are viewing all employees");
    // Call function to go back to the questionnaire
    initialQuestion();
  });
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
