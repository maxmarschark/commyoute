TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(name, email, password) VALUES ('Wes Waterman', 'wes@wes.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Max Marshark', 'max@max.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Sam Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(name, email, password) VALUES ('John Castrillon', 'john@john.com', 'password');

-- 7 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 2, 1, 1, 0, 1);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 4, 1, 1, 0, 2);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 5, 1, 1, 0, 2);
INSERT INTO trans(type, name, overall, delay, crowded, smelly, u_id) VALUES ('Train', '7', 1, 1, 1, 0, 3);
