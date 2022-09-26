import {Router} from 'express'
import {allProducts, addProduct, modifyProduct, deleteProductById} from '../../controllers/mongoDB/productos-controllers.js'

const router = Router();

router.get("/", allProducts);
router.post("/", addProduct);
router.put("/:id", modifyProduct);
router.delete("/:id", deleteProductById);

export {router};