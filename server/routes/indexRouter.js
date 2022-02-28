const router = require('express').Router();


const routerHomes = require('./routerHomes');
const adminMainRouter = require('./adminMainRouter');
const reviewsRouter = require('./reviewsRouter');
const routerServices = require('./routerService')

router.use('/homes', routerHomes);
router.use('/admin', adminMainRouter);
router.use('/reviews', reviewsRouter);
router.use('/services', routerServices);

module.exports = router;
