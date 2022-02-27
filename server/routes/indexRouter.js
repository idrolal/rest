const router = require('express').Router();


const routerHomes = require('./routerHomes');
const adminMainRouter = require('./adminMainRouter');
const reviewsRouter = require('./reviewsRouter');

router.use('/homes', routerHomes);
router.use('/admin', adminMainRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
