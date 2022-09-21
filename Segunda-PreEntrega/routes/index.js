    const { Router } = require('express');
    const carritoRoutes = require('./carrito')
    const productsRoutes = require('./products')

    const router = Router()

    router.use('/carrito', carritoRoutes)
    router.use('/products', productsRoutes)


    module.exports = router;
