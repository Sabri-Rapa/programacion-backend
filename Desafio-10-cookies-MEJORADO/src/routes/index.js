const { Router } = require('express')
const homeRoutes = require('./home')
const loginRoutes = require('./login')
const logoutRoutes = require('./logout')


const router = Router()

router.use('/home', homeRoutes)
router.use('/login', loginRoutes)
router.use('/logout', logoutRoutes)

module.exports = router;