const startQuestions = require("./utils/startQuestions");
const {
  insertDepartment,
  insertRole,
  insertEmployee,
  viewDepartments,
  viewEmployee,
  viewRole,
  changeEmployee,
} = require("./utils/SQLqueries");
const addDepartment = require("./utils/addDepartment");
const addRole = require("./utils/addRole");
const addEmployee = require("./utils/addEmployee");
const updateRole = require("./utils/updateRole");
const callTable = require("console.table");

const promptStart = () => {
  startQuestions().then((answer) => {
    switch (answer.main) {
      case "View All Employees":
        viewEmployee()
          .then((employees) => {
            console.table(employees);
          })
          .then(promptStart);
        break;
      case "Add A New Employee":
        viewRole().then((roles) => {
          viewEmployee().then((employees) => {
            addEmployee(roles, employees).then((employee) => {
              insertEmployee(employee).then(promptStart);
            });
          });
        });
        break;
      case "View All Roles":
        viewRole()
          .then((roles) => {
            console.table(roles);
          })
          .then(promptStart);
        break;
      case "Add A New Role":
        viewDepartments().then((departments) => {
          addRole(departments).then((role) => {
            insertRole(role).then(promptStart);
          });
        });
        break;
      case "View All Departments":
        viewDepartments()
          .then((departments) => {
            console.table(departments);
          })
          .then(promptStart);
        break;
      case "Add A New Department":
        addDepartment().then((department) => {
          insertDepartment(department.dpt).then(promptStart);
        });
        break;
      case "Update Employee Role":
        viewEmployee().then((employees) => {
          viewRole().then((roles) => {
            updateRole(employees, roles).then((newEmployeeRole) => {
              changeEmployee(newEmployeeRole).then(promptStart);
            });
          });
        });
        break;
      case "Quit":
        console.log("Bye!");
        break;
    }
  });
};

promptStart();
