-- USE employee_db;
-- INSERT INTO department (name)
-- VALUES ("Engineering"), ("Sales"), ("Management");
-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Engineer", 80000, 1), ("Salesperson", 60000, 2), ("Manager", 70000, 3);
-- INSERT INTO employee (first_name, second_name, role_id, manager_id)
-- VALUES ("Jack", "Smallwood", 1, NULL), ("Sean", "New", 2, NULL), ("Bob", "Smallwood", 3, 1);


INSERT INTO department (name)
VALUES
("Engineering"),
("Sales"),
("Finance"),
("Legal");


INSERT INTO role (title, salary, department_id)
VALUES
("Engineer", 80000, 1),
("Salesperson", 50000, 2),
("Accountant", 60000, 3),
("Lawyer", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Gordon", "Ryan", 1, NULL),
("Craig", "Jones", 2, NULL),
("Braulio", "Estima", 3, NULL),
("Roger", "Gracie", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Bradley", "Hill", 5, 4),
("Owen", "Livesy", 6, 3),
("Kade", "Ruotolo", 7, 2),
("Mikey", "Muscemi", 8, 1);

