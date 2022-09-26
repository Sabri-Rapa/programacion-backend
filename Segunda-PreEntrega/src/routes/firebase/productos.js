import {Router} from 'express'
import {addProduct, allProducts, modifyProduct, deleteProductById} from '../../controllers/firebase/productos-controllers.js'

const router = Router();

router.get("/", allProducts);
router.post("/", addProduct);
router.put("/:id", modifyProduct);
router.delete("/:id", deleteProductById);


export {router};