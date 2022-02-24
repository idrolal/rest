const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const fileFilter = require('../middlewares/fileFilter.milter.middleware');
const storageMulter = require('../middlewares/storage.milter.middleware');

router.post('/addHouse/img', storageMulter.array('homesImg', 10), adminController.saveImgController);

router.post('/addHouse', storageMulter.array('homesImg', 10), adminController.addHouseController);

module.exports = router;
