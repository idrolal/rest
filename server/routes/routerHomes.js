const router = require('express').Router();
const homesControllers = require('../controllers/homesControllers');

router.get('/', homesControllers.getAllHouses);
router.delete('/:id', homesControllers.deleteHomes);

module.exports = router;
