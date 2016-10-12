const express = require('express');
const TrainsController = require('../controllers/TrainsController');

const router = express.Router();

router.get('/', TrainsController.getAllOfCurrentUser);
router.post('/', TrainsController.create);
router.delete('/:id', TrainsController.delete);

module.exports = router;
