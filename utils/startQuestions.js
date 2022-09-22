// const inquirer = require("inquirer");
// const addDepartment = require("./addDepartment");
// const addRole = require("./addRole");
// const addEmployee = require("./addEmployee");
// const updateEmployee = require("./updateRole");

// const menu = () => {
//   console.log("================");
//   inquirer
//     .prompt({
//       type: "list",
//       message: "What would you like to do next?",
//       name: "menuAns",
//       choices: [
//         "View all departments",
//         "View all roles",
//         "View all employees",
//         "Add a department",
//         "Add a role",
//         "Add an employee",
//       ],
//     })
//     .then((answer) => {
//       switch (answer.menuAns) {
//         case "View all departments":
//           console.log("I need to show all departments");
//           //   replace with func
//           break;
//         case "View all departments":
//           console.log("I need to show all departments");
//           break;
//         case "View all departments":
//           console.log("I need to show all departments");
//           break;
//         case "View all departments":
//           console.log("I need to show all departments");
//           break;
//         case "View all departments":
//           console.log("I need to show all departments");
//           break;
//         case "View all departments":
//           console.log("I need to show all departments");
//           break;

//         default:
//           break;
//       }
//     });
// };

// module.exports = menu;

const inquirer = require("inquirer");

const startQuestions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "main",
      choices: [
        "View All Employees",
        "Add A New Employee",
        "View All Roles",
        "Add A New Role",
        "View All Departments",
        "Add A New Department",
        "Update Employee Role",
        "Quit",
      ],
    },
  ]);
};

module.exports = startQuestions;
