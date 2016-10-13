DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transportation;

CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);


CREATE TABLE trans (
  t_id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  name VARCHAR(255),
  overall INTEGER,
  delay INTEGER,
  crowded INTEGER,
  smelly INTEGER,
  review_date TIMESTAMP NOT NULL DEFAULT NOW(),
  u_id INTEGER REFERENCES users(u_id)
);
