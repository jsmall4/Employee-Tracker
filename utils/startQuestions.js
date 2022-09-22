const inquirer = require("inquirer");
const addDepartment = require("./addDepartment");
const addRole = require("./addRole");
const addEmployee = require("./addEmployee");
const updateEmployee = require("./updateEmployee");

// create a view all departments file/func

const menu = () => {
  console.log("================");
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do next?",
      name: "menuAns",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
      ],
    })
    .then((answer) => {
      switch (answer.menuAns) {
        case "View all departments":
          console.log("I need to show all departments");
          //   replace with func
          break;
        case "View all departments":
          console.log("I need to show all departments");
          break;
        case "View all departments":
          console.log("I need to show all departments");
          break;
        case "View all departments":
          console.log("I need to show all departments");
          break;
        case "View all departments":
          console.log("I need to show all departments");
          break;
        case "View all departments":
          console.log("I need to show all departments");
          break;

        default:
          break;
      }
    });
};

module.exports = menu;
