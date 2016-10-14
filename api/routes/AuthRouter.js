const express = require('express');
const AuthController = require('../controllers/AuthController');
const TrainsController = require('../controllers/TrainsController');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signUp);
router.post('/create', TrainsController.create);

module.exports = router;
