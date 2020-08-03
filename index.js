const inquirer = require("inquirer");
const table = require("console.table");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "wintermute_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  //   Start app by calling first function
  initialQuestion();
});

// This first function sets up the task the user wants to perform
function initialQuestion() {
  inquirer.prompt({
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
    ],
  }).then(answers => {
      console.log(answers.manage);
    // Switch statement to redirect to next portion of the questionnaire depending on the answer
    switch(answers.manage) {
        case
    }
  })
}
