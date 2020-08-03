DROP DATABASE IF EXISTS wintermute_db;

CREATE DATABASE wintermute_db;

USE wintermute_db;

-- Department table
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Role table
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL (6,0) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id),
  PRIMARY KEY (id)
);

-- Employee table
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT NULL,
  PRIMARY KEY (id)
);

