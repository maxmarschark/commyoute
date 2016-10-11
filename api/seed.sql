TRUNCATE TABLE users;
TRUNCATE TABLE trans;

ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE trans_id_seq RESTART WITH 1;

INSERT INTO users(firstname, lastname, email, password) VALUES ('Wes', 'Waterman', 'wes@wes.com', 'password');
INSERT INTO users(firstname, lastname, email, password) VALUES ('Max', 'Marshark', 'wes@wes.com', 'password');
