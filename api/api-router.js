const router = require('express').Router()

const authRouter = require('./auth/auth-router.js')
const userRouter = require('./users/user-router.js')
const restrictedRouter = require('./restricted/restricted-router.js')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/restricted', restrictedRouter)

module.exports = router