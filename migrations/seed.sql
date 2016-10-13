TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(name, email, password) VALUES ('Wes Waterman', 'wes@wes.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Max Marshark', 'max@max.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Sam Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(name, email, password) VALUES ('John Castrillon', 'john@john.com', 'password');

-- 1 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '1', 2, 1, 1, 0, '', 1);
IN

--2 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '2', 2, 1, 1, 0, '', 1);
IN

-- 3 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '3', 2, 1, 1, 0, '', 1);
IN
