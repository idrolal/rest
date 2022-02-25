const router = require('express').Router();
const reviewsController = require('../controllers/reviews.controller');

router.get('/', reviewsController.initReviews);
router.post('/', reviewsController.addReview);

module.exports = router;
