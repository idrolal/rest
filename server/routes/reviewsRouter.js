const router = require('express').Router();
const reviewsController = require('../controllers/reviews.controller');

router.get('/', reviewsController.initReviews);
router.put('/:id', reviewsController.putReviews);

module.exports = router;
