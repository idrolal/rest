const router = require('express').Router();
const routerHomes = require('./routerHomes')

router.use('/homes', routerHomes);

// router.use('/путь', 'Назание другого роута, который подтягивается только сюда');

// Пример. В userRouter прописана вся логика регистрации, логина, логаута
// router.use('/user', userRouter)

module.exports = router;
