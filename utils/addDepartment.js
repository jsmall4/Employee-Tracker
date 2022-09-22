const inquirer = require("inquirer");

const addDepartment =() => {
    inquirer.prompt ([
        {type: "input",
        name: "department",
        message: "Enter the name of the department: ", }]).then(answer => {
            if (answer.department){ 
                return true;
        } else {
            console.log("You must enter a department name");
            return false;
        }
        }) 




     
        
    
}


module.export = addDepartment;