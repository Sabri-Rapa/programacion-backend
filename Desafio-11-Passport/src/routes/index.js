const { Router } = require('express')
const homeRoutes = require('./home')
const loginRoutes = require('./login')
const logoutRoutes = require('./logout')
const signupRoutes = require('./signup')
const formProductsRoutes = require('./formProducts')

const router = Router()

router.use('/home', homeRoutes)
router.use('/login', loginRoutes)
router.use('/logout', logoutRoutes)
router.use('/signup', signupRoutes)
router.use('/formProducts', formProductsRoutes)

module.exports = router;