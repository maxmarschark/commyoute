DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transportation;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(10)
);

CREATE TABLE trans (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  name VARCHAR(255),
  overall INTEGER,
  delay BOOLEAN,
  crowded BOOLEAN,
  smelly BOOLEAN,
  post_time TIMESTAMP,
  user_id integer
);
