TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(name, email, password) VALUES ('Wes Waterman', 'wes@wes.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Max Marshark', 'max@max.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Sam Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(name, email, password) VALUES ('John Castrillon', 'john@john.com', 'password');

-- 7 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '7', 2, 1, 1, 0, 'http://images.huffingtonpost.com/2015-11-05-1446690250-7018843-2_train_logo-thumb.png', 1);
