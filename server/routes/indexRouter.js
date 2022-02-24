const router = require('express').Router();

router.use('/путь', 'Назание другого роута, который подтягивается только сюда');

// Пример. В userRouter прописана вся логика регистрации, логина, логаута
// router.use('/user', userRouter)

module.exports = router;
