const router = require('express').Router();
const homesControllers = require('../controllers/homesControllers')

router.get('/', homesControllers.getAllHouses)


module.exports = router;
