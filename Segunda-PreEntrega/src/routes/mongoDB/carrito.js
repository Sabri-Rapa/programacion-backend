import { Router } from 'express';
import {addCarrito, deleteCarrito, getProductsInCart, addProducts, deleteProduct} from '../../controllers/mongoDB/carrito-controllers.js'


const router = Router()

router.post("/", addCarrito);
router.delete("/:id", deleteCarrito);
router.get("/productos", getProductsInCart);
router.post("/:id/productos", addProducts);
router.delete("/:id/productos/:id_prod", deleteProduct);

export  {router};