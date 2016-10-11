const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const authentication = require('../api/middleware/authentication');
const AuthRouter = require('../api/routes/AuthRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

app.use('/test', authentication);
app.use('/test', AuthRouter);
app.use('/test/users', UserRouter);
app.use('/test/trains', TrainsRouter);

module.exports = app;
