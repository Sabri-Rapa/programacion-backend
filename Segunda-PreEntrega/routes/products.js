const { Router } = require("express");
const router = Router();
const {allProducts, addProduct, modifyProduct, deleteProductById} = require("../controllers/products-controllers");

let isAdmin = true;

let isAuthorized = (req, res, next) => {
  if (isAdmin) {
    next();
  } else {
    res.send("No está autorizado");
  }
};

router.get("/", allProducts);
router.post("/", isAuthorized, addProduct);
router.put("/:id", isAuthorized, modifyProduct);
router.delete("/:id", isAuthorized, deleteProductById);

module.exports = router;
