USE employees;




INSERT INTO department (name)
VALUES
('Accounting'), ('DevOps'), ('Engineering'), ('Music'), ('IT');

INSERT INTO role (title, salary, department_id)
VALUES
("Bookkeeper", 75000, 1),
("Back-End-Developer", 100000, 2),
("Javascript Dude", 120000, 3),
("Director of Choral Activities", 50000, 4),
("Geeksquad Member", 80000, 5);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES
("Daya", "Bolical", 1, NULL),
("Justin", "Credible", 2, NULL),
("Claire", "Annette", 3, 1),
("Anita", "Hero", 4, 2),
("Amanda", "Tory", 5, 1),
("Kate", "Forna", 3, 2);