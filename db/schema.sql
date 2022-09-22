CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- console.table(department)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- console.table(role)

CREATE TABLE employee (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   second_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
   FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

-- console.table(employee),
-- console.table(employee_db) - redun





source db/seeds.sql;
