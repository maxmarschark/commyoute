TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(name, email, password) VALUES ('Wes Waterman', 'wes@wes.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Max Marshark', 'max@max.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Sam Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(name, email, password) VALUES ('John Castrillon', 'john@john.com', 'password');

-- 1 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '1', 2, 1, 1, 0, 'http://imgur.com/k8TCiXf', 1);

--2 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '2', 2, 1, 1, 0, 'http://imgur.com/N0sLEvs', 1);

-- 3 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '3', 2, 1, 1, 0, 'http://imgur.com/KPIV5zf', 1);

-- 4 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id)
VALUES ('Train', '4', 3, 1, 1, 0, 'http://imgur.com/D7xf6Uz', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '5', 2, 1, 1, 0, 'http://imgur.com/7jvbP2J', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '6', 2, 1, 1, 0, 'http://imgur.com/gGhZAmQ', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'G', 2, 1, 1, 0, 'http://imgur.com/pwjqFlQ', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'F', 2, 1, 1, 0, 'http://imgur.com/6MfZLyL', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'E', 2, 1, 1, 0, 'http://imgur.com/N10qEWJ', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'D', 2, 1, 1, 0, 'http://imgur.com/GtwIUKX', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'C', 2, 1, 1, 0, 'http://imgur.com/IYcNLir', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'B', 2, 1, 1, 0, 'http://imgur.com/Z7U8ShG', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'A', 2, 1, 1, 0, 'http://imgur.com/fEtZJtp', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '7', 2, 1, 1, 0, 'http://imgur.com/oTdxcdP', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'J', 2, 1, 1, 0, 'http://imgur.com/KVlrMnA', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'L', 2, 1, 1, 0, 'http://imgur.com/2eQaQ66', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'M', 2, 1, 1, 0, 'http://imgur.com/4LP1BJT', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'N', 2, 1, 1, 0, 'http://imgur.com/68hkBIk', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'Q', 2, 1, 1, 0, 'http://imgur.com/YM6OziH', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'R', 2, 1, 1, 0, 'http://imgur.com/fmwcuVp', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'S', 2, 1, 1, 0, 'http://imgur.com/UP1E38P', 1);

INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'Z', 2, 1, 1, 0, 'http://imgur.com/R79RkJc', 1);
