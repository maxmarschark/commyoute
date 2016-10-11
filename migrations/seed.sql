TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(firstname, lastname, email, password) VALUES ('Wes', 'Waterman', 'wes@wes.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('Max', 'Marshark', 'max@max.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('Sam', 'Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('John', 'Castrillon', 'john@john.com', 'password');

-- 7 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 2, true, true, false, 1);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 4, true, true, false, 2);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 5, true, true, false, 2);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 1, true, true, false, 3);


