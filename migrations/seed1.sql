TRUNCATE TABLE users;
TRUNCATE TABLE trans;

INSERT INTO users(name, email, password) VALUES ('Wes Waterman', 'wes@wes.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Max Marshark', 'max@max.com', 'password');
INSERT INTO users(name, email, password) VALUES ('Sam Peterson', 'sam@peterson.com', 'password');
INSERT INTO users(name, email, password) VALUES ('John Castrillon', 'john@john.com', 'password');

-- 1 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '1', 2, 1, 1, 0, 'http://i.imgur.com/k8TCiXf.jpg', 1);

-- 2 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '2', 2, 1, 1, 0, 'http://i.imgur.com/N0sLEvs.jpg', 1);

-- 3 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '3', 2, 1, 1, 0, 'http://i.imgur.com/KPIV5zf.jpg', 1);

-- 4 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '4', 2, 1, 1, 0, 'http://i.imgur.com/D7xf6Uz.jpg', 1);

-- 5 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '5', 2, 1, 1, 0, 'http://i.imgur.com/7jvbP2J.jpg', 1);

-- 6 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '6', 2, 1, 1, 0, 'http://i.imgur.com/gGhZAmQ.jpg', 1);

-- 7 train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', '7', 2, 1, 1, 0, 'http://i.imgur.com/oTdxcdP.jpg', 1);

-- A train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'A', 2, 1, 1, 0, 'http://i.imgur.com/fEtZJtp.jpg', 1);

-- C train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'C', 2, 1, 1, 0, 'http://i.imgur.com/IYcNLir.jpg', 1);

-- E train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'E', 2, 1, 1, 0, 'http://i.imgur.com/N10qEWJ.jpg', 1);

-- N train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'N', 2, 1, 1, 0, 'http://i.imgur.com/68hkBIk.jpg', 1);

-- Q train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'Q', 2, 1, 1, 0, 'http://i.imgur.com/YM6OziH.jpg', 1);

-- R train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'R', 2, 1, 1, 0, 'http://i.imgur.com/fmwcuVp.jpg', 1);

-- L train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'L', 2, 1, 1, 0, 'http://i.imgur.com/2eQaQ66.jpg', 1);

-- G train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'G', 2, 1, 1, 0, 'http://i.imgur.com/pwjqFlQ.jpg', 1);

-- B train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'B', 2, 1, 1, 0, 'http://i.imgur.com/Z7U8ShG.jpg', 1);

-- D train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'D', 2, 1, 1, 0, 'http://i.imgur.com/GtwIUKX.jpg', 1);

-- F train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'F', 2, 1, 1, 0, 'http://i.imgur.com/6MfZLyL.jpg', 1);

-- M train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'M', 2, 1, 1, 0, 'http://i.imgur.com/4LP1BJT.jpg', 1);

-- J train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'J', 2, 1, 1, 0, 'http://i.imgur.com/KVlrMnA.jpg', 1);

-- Z train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'Z', 2, 1, 1, 0, 'http://i.imgur.com/R79RkJc.jpg', 1);

-- S train
INSERT INTO trans(type, name, overall, delay, crowded, smelly, img_url, user_id) VALUES ('Train', 'S', 2, 1, 1, 0, 'http://i.imgur.com/UP1E38P.jpg', 1);
