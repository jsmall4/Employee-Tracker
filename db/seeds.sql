USE employee_db;
INSERT INTO department (name)
VALUES ("Engineering"), ("Sales"), ("Management");
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 80000, 1), ("Salesperson", 60000, 2), ("Manager", 70000, 3);
INSERT INTO employee (first_name, second_name, role_id, manager_id)
VALUES ("Jack", "Smallwood", 1, NULL), ("Sean", "New", 2, NULL), ("Bob", "Smallwood", 3, 1);





