import {Router} from 'express'
import {router as productsRouter} from './productos.js'
import {router as carritoRouter} from './carrito.js'

const router = Router();

router.use('/productos', productsRouter)
router.use('/carrito', carritoRouter)

export {router}