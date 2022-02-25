const router = require('express').Router();
const reviewsController = require('../controllers/reviews.controller');

router.get('/', reviewsController.initReviews);

module.exports = router;
