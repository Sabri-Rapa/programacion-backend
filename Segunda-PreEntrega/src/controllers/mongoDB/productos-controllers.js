import {contenedores} from "../../daos/index.js";

const productsContenedor = contenedores('mongoDB').productos;


let allProducts = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      let getProduct = await productsContenedor.getById(id);

      getProduct
        ? res.send(getProduct)
        : res.send({ error: "Producto no encontrado" });
    } else {
      let getAllProducts = await productsContenedor.getAll();
      res.send(getAllProducts);
    }
  } catch (err) {
    console.log(err);
  }
};

let addProduct = async (req, res) => {
  const { body } = req;
  try {
    await productsContenedor.save(body);
    res.send({ Estado: "success", producto: body });
  } catch (err) {
    console.log(err);
  }
};

let modifyProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    let getProduct = await productsContenedor.getById(id);

    if (getProduct) {
      await productsContenedor.updateProducto(id, body);
      res.send({ producto_modificado: body });
    } else {
      res.send({ error: "Producto no encontrado" });
    }
  } catch (err) {
    console.log(err);
  }
};

let deleteProductById = async (req, res) => {
  let { id } = req.params;
  try {
    let getProduct = await productsContenedor.getById(id);

    if (getProduct) {
      await productsContenedor.deleteById(id);

      res.send({ producto_eliminado: getProduct });
    } else {
      res.send({ error: "Producto no encontrado" });
    }

    res.send();
  } catch (err) {
    console.log(err);
  }
};

export { allProducts, addProduct, modifyProduct, deleteProductById };
