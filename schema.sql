DROP DATABASE IF EXISTS employeeTrackerdb;

CREATE DATABASE employeeTrackerdb;

USE employeeTrackerdb;-- use db!

CREATE TABLE department
(
    id INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE job
(
    id INT NOT NULL,
    title VARCHAR(30),
    salary INT,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee
(
    id INT NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    job VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO employee
    (id,firstname,lastname,job)
VALUES(1, "joe", "Dirt", "manager")
INSERT INTO employee
    (id,firstname,lastname,job)
VALUES(2, "jerry", "seinfeld", "manager")
INSERT INTO employee
    (id,firstname,lastname,job)
VALUES(3, "john", "Mulany", "manager")
INSERT INTO employee
    (id,firstname,lastname,job)
VALUES(4, "george", "freeman", "manager")