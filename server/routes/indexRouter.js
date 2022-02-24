const router = require('express').Router();
const routerHomes = require('./routerHomes');
const adminMainRouter = require('./adminMainRouter');

router.use('/homes', routerHomes);
router.use('/admin', adminMainRouter);

module.exports = router;
