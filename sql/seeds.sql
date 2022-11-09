INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES  
 ("Joe", "Archer", 4, 4),
    ("Bob", "Smith", 2, 4),
    ("Scooby", "Doo", 3, 4),
    ("Bruce", "Wayne", 1, NULL);

INSERT INTO role (title, salary, department_id)
  VALUES  
    ("Supervisor", 70000, 1),
    ("Sales Manager", 60000, 2),
    ("Marketing Specialist", 70000, 3),
    ("Marketing Designer", 60000, 3);

INSERT INTO department (name)
  VALUES  
    ("accounting"), ("sales"), ("marketing");
    