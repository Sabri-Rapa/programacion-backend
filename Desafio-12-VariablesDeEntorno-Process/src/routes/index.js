const { Router } = require('express')
const homeRoutes = require('./home')
const loginRoutes = require('./login')
const logoutRoutes = require('./logout')
const signupRoutes = require('./signup')
const formProductsRoutes = require('./formProducts')
const infoRoutes = require('./info')
const randomRoutes = require('./random')

const router = Router()

router.use('/home', homeRoutes)
router.use('/login', loginRoutes)
router.use('/logout', logoutRoutes)
router.use('/signup', signupRoutes)
router.use('/formProducts', formProductsRoutes)
router.use('/info', infoRoutes)
router.use('/random', randomRoutes)

module.exports = router;