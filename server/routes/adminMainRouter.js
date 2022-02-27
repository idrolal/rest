const router = require('express').Router();
const { isAdmin } = require('../middlewares/isAdmin');
const adminController = require('../controllers/admin.controller');
const storageMulter = require('../middlewares/storage.milter.middleware');
const { fileFilter } = require('../middlewares/fileFilter.milter.middleware');

router.put('/addHouse/img', fileFilter, storageMulter.array('homesImg', 5), adminController.saveImgController);

router.post('/addHouse', storageMulter.array('homesImg', 5), adminController.addHouseController);

router.post('/login', isAdmin, adminController.adminLogin);
router.get('/addHouse', isAdmin, adminController.addHouseController);

router.put('/editHouse/:id', adminController.editHouseController);

router.get('/reservations/all', adminController.getAllReservations);

module.exports = router;
