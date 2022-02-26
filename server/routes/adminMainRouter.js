const router = require('express').Router();
const adminController = require('../controllers/admin.controller');
const fileFilter = require('../middlewares/fileFilter.milter.middleware');
const storageMulter = require('../middlewares/storage.milter.middleware');

router.put('/addHouse/img', storageMulter.array('homesImg', 5), adminController.saveImgController);

router.post('/addHouse', adminController.addHouseController);

router.post('/login', adminController.adminLogin);
router.get('/addHouse', adminController.addHouseController);
router.put('/editHouse/:id', adminController.editHouseController);

module.exports = router;
