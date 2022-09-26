import {Router} from 'express'
import {router as productsRouter} from './productos.js'

const router = Router();

router.use('/productos', productsRouter)

export {router}