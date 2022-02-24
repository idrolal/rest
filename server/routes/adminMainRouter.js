const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const fileFilter = require('../middlewares/fileFilter.milter.middleware');
const storageMulter = require('../middlewares/storage.milter.middleware');

router.post('/addHouse/img', storageMulter.single('homesImg'), adminController.saveImgController);

router.post('/addHouse', storageMulter.single('homesImg'), adminController.addHouseController);

module.exports = router;
