const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const authentication = require('../api/middleware/authentication.js');
const authRouter = require('../api/routes/authRouter.js');

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
app.use('/test', authRouter);
app.use('/test/users', userRouter);
app.use('/test/trains', trainsRouter);

module.exports = app;
