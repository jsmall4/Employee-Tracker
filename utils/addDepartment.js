const inquirer = require("inquirer");

const addDepartment = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the name of the new department?",
      validate: (dpt) => {
        if (dpt) {
          return true;
        } else {
          console.log("Please enter a department name");
          return false;
        }
      },
    },
  ]);
};

module.exports = addDepartment;
