DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transportation;

CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(10)
);

CREATE TABLE trans (
  t_id SERIAL PRIMARY KEY,
  type VARCHAR(255),
  name VARCHAR(255),
  overall INTEGER,
  delay BOOLEAN,
  crowded BOOLEAN,
  smelly BOOLEAN,
  review_Date datetime NOT NULL DEFAULT GETDATE(),
  u_id INTEGER FOREIGN KEY REFERENCES users(u_Id)
);
