const { Router } = require('express');
const productsRouter = require('./productos.js')
const carritoRouter = require('./carrito.js')
const homeRouter = require('./home.js')
const loginRouter = require('./login.js')
const signupRouter = require('./signup')
const formProductsRouter = require('./formProducts')
const logoutRouter = require('./logout')
const perfilRouter = require('./perfil')

const router = Router();

router.use('/productos', productsRouter)
router.use('/carrito', carritoRouter)
router.use('/home', homeRouter)
router.use('/login', loginRouter)
router.use('/signup', signupRouter)
router.use('/formProducts', formProductsRouter)
router.use('/logout', logoutRouter)
router.use('/perfil', perfilRouter)

module.exports = router;