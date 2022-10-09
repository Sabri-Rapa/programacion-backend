const { Router } = require('express')
const productosTestRoutes = require('./productos-test')
const sesionRoutes = require('./sesion')
const homeRoutes = require('./home')

const router = Router()

router.use('/productos-test', productosTestRoutes)
router.use('/sesion', sesionRoutes)
router.use('/home', homeRoutes)

module.exports = router;