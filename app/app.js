const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const authentication = require('../api/middleware/authentication');
const AuthRouter = require('../api/routes/AuthRouter');
const UserRouter = require('../api/routes/UserRouter');
const TrainsRouter = require('../api/routes/TrainsRouter');

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

app.use('/api', authentication);
app.use('/api', AuthRouter);
app.use('/api/users', UserRouter);
app.use('/api/trains', TrainsRouter);

module.exports = app;
