const express = require('express');
const TrainsController = require('../controllers/TrainsController');

const router = express.Router();

router.get('/:id', TrainsController.getTrainInfo);
// router.post('/', TrainsController.createReview);
// router.get('/:uid', TrainsController.getLastReviewForUser);
// router.delete('/:uid', TrainsController.delete);
// router.patch('/:uid', TrainsController.changeLastReviewForUser);

module.exports = router;
