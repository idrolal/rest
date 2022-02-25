const router = require('express').Router();

const adminMainRouter = require('./adminMainRouter');

router.use('/admin', adminMainRouter);

module.exports = router;
