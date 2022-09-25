const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});

console.log(`\nConnected to the employees_db database.`);

db.connect((err) => {
  if (err) throw err;
});

module.exports = db;
