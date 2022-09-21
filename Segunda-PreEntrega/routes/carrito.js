const { Router } = require("express");
const router = Router();

const {
  addCarrito,
  deleteCarrito,
  getProductsById,
  addProducts,
  deleteProduct,
} = require("../controllers/carrito-controllers");

let isAdmin = true;

let isAuthorized = (req, res, next) => {
  if (isAdmin) {
    next();
  } else {
    res.send("No está autorizado");
  }
};

router.post("/", addCarrito);
router.delete("/:id", deleteCarrito);
router.get("/:id/productos", getProductsById);
router.post("/:id/productos", addProducts);
router.delete("/:id/productos/:id_prod", deleteProduct);

module.exports = router;
