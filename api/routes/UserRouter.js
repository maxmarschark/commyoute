const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/:id', UserController.getOne);
router.patch('/:id', UserController.changeName);

module.exports = router;
