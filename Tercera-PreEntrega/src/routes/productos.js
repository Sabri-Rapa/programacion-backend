const { Router } = require('express');
const {allProducts, addProduct, modifyProduct, deleteProductById} = require('../controllers/productos-controllers.js')

const router = Router();

router.get("/", allProducts);
router.post("/", addProduct);
router.put("/:id", modifyProduct);
router.delete("/:id", deleteProductById);

module.exports = router;