const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.post('/free', orderController.getFreeHouse);

module.exports = router;
