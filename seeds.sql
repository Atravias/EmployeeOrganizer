INSERT INTO department
	(name)
VALUES
	("HR"),
    ("Accounting"),
    ("Admin");
    

INSERT INTO job
    (title, salary, department_id)
VALUES
    ("Manager", 60000, 3),
    ("Intern", 30000, 1);


INSERT INTO employee
    (firstname,lastname,job_id)
VALUES("joe", "Dirt", 2),
    ("jerry", "seinfeld", 1),
    ("john", "Mulany", 1),
    ("george", "freeman", 2);
    
SELECT 
	employee.id as employeeId,
    firstname,
    lastname,
    job.id as jobId,
    title,
    salary,
    department.name as department
FROM employee
LEFT JOIN job
	ON employee.job_id = job.id
LEFT JOIN department
	ON job.department_id = department.id;