const inquirer = require("inquirer");

const addEmployee = async (roles, employees) => {
  employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
  employees.push("None");

  roles = roles.map((x) => x.title);

  return inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the first name of your new employee?",
      validate: (firstName) => {
        if (firstName) {
          return true;
        } else {
          console.log("Please enter a first name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the last name of your new employee?",
      validate: (lastName) => {
        if (lastName) {
          return true;
        } else {
          console.log("Please enter a first name");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "whatRole",
      message: "What role will they have?",
      choices: roles,
    },
    {
      type: "list",
      name: "manager",
      message: "Who is their manager?",
      choices: employees,
    },
  ]);
};

module.exports = addEmployee;
