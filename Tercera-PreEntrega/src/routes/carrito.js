const { Router } = require('express');
const {addProducts, deleteCarrito, getProductsInCart,  deleteProduct, viewCarrito, getCarrito, buy} = require('../controllers/carrito-controllers.js')


const router = Router()

router.get("/", getCarrito);
router.get("/view", viewCarrito);
router.delete("/:id", deleteCarrito);
router.get("/productos", getProductsInCart);
router.post("/agregarProducto", addProducts);
router.delete("/:id/productos/:id_prod", deleteProduct);
router.post("/checkout", buy);

module.exports = router;