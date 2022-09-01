    const { Router } = require('express');
    const carritoRoutes = require('./carrito')
    const productosRoutes = require('./productos')

    const router = Router()

    router.use('/carrito', carritoRoutes)
    router.use('/productos', productosRoutes)


    module.exports = router;
