const { Router } = require('express')
const productosTestRoutes = require('./productos-test')

const router = Router()

router.use('/productos-test', productosTestRoutes)

module.exports = router;