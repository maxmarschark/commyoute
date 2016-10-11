TRUNCATE TABLE users;
TRUNCATE TABLE trans;

ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE trans_id_seq RESTART WITH 1;

INSERT INTO users(firstname, lastname, email, password) VALUES ('Wes', 'Waterman', 'wes@wes.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('Max', 'Marshark', 'max@max.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('Sam', 'Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('John', 'Castrillon', 'john@john.com', 'password');

-- 7 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, post_time, user_id) VALUES ('Train', '7', 2, true, true, false, )

