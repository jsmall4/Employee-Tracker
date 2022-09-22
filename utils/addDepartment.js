const inquirer = require("inquirer");

const addDepartment () => {
    return inquirer.prompt ([
        type: "input",
        name: "department",
        message: "Enter the name of the department: ",
        // if {
    //         return true;
    // } else {
    //     console.log("You must enter a department name");
    //     return false;
    // }
        
    ])
}


module.export = addDepartment;