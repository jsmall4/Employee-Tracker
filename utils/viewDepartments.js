const connection = require("../config/connection");
const viewDepartments = () => {
  connection.query("select * from department");
};

//  add in all utils files.

//  console.table
