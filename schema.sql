DROP DATABASE IF EXISTS employeeTrackerdb;

CREATE DATABASE employeeTrackerdb;

USE employeeTrackerdb;-- use db!

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE job (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary INT,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES department (id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    job_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (job_id)
        REFERENCES job (id)
);

