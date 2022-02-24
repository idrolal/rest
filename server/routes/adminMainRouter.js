const router = require('express').Router();

// router.use('/allHouses', 'Назание другого роута, который подтягивается только сюда');


// Пример. В userRouter прописана вся логика регистрации, логина, логаута
// router.use('/user', userRouter)
router.use('/main', (req, res) => {
  res.send('main')
})

router.use('/allHouses', (req, res) => {
  res.send('allHouses')
})

router.use('/editHouse/api', (req, res) => {
  res.send('editHouse')
})

router.use('/addHouse', (req, res) => {
  res.send('addHouse')
})

module.exports = router;
