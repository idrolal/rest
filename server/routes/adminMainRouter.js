const router = require('express').Router();
const { isAdmin } = require('../middlewares/isAdmin');
const adminController = require('../controllers/admin.controller');
const storageMulter = require('../middlewares/storage.milter.middleware');
const { fileFilter } = require('../middlewares/fileFilter.milter.middleware');

const middlewares = [fileFilter, storageMulter.array('homesImg', 5)];

router.put('/addHouse/img', middlewares, adminController.saveImgController);

router.post('/addHouse', middlewares[1], adminController.addHouseController);

router.post('/login', isAdmin, adminController.adminLogin);
router.get('/addHouse', isAdmin, adminController.addHouseController);
router.put('/editHouse/:id', adminController.editHouseController);

module.exports = router;
