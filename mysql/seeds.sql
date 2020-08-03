-- Departments: Sales, Engineering, Finance, Legal

use wintermute_db

INSERT INTO department 
    (name)
VALUES 
    ('sales'),
    ('engineering'),
    ('finance'),
    ('legal');


INSERT INTO role
    (title, salary, department_id)
VALUES
    ('sales lead', 100000, 1),
    ('salesperson', 80000, 1),
    ('lead engineer', 150000, 2),
    ('software engineer', 120000, 2),
    ('account manager', 160000, 3),
    ('accountant', 125000, 3)
    ('legal team lead', 250000, 4),
    ('lawyer', 190000, 4);

    INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
    VALUES
        ('Barbara', 'Gordon', 5, NULL),
        ('Samantha', 'Groves', 6, 20),
        ('Felicity', 'Smoak', 7, 25),
        ('Alice', 'Morgan', 8, NULL);