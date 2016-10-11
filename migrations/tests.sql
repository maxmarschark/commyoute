DROP DATABASE IF EXISTS tests;
CREATE DATABASE tests;

\c tests;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
);

CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  body VARCHAR NOT NULL,
  train_id INTEGER REFERENCES users (id)
);