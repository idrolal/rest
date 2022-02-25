const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.post('/login', adminController.adminLogin);
router.get('/addHouse', adminController.addHouseController);

module.exports = router;
