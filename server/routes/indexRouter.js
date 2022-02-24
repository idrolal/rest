const router = require('express').Router();
const adminMainRouter = require('./adminMainRouter')
//router.use('/путь', 'Назание другого роута, который подтягивается только сюда');

// Пример. В userRouter прописана вся логика регистрации, логина, логаута
// router.use('/user', userRouter)
router.use('/admin', adminMainRouter);

module.exports = router;
