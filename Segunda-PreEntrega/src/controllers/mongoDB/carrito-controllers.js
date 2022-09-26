import { contenedores } from "../../daos/index.js";

const carritoContenedor = contenedores("mongoDB").carrito;
const productosContenedor = contenedores("mongoDB").productos;


let addCarrito = async (req, res) => {
  try {
    let date = new Date();

    let body = {
      timestamp: date,
      productos: [],
    };

    let idNuevoCarrito = await carritoContenedor.save(body);
    res.send({ Estado: "success", idNuevoCarrito: idNuevoCarrito });
  } catch (err) {
    console.log(err);
  }
};

let addProducts = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    let allProducts = await productosContenedor.getAll()
    let productSelected = allProducts.find(prod => prod.nombre === body.nombre)
    body._id = productSelected._id

    await carritoContenedor.addToCart(id, body);
    res.send("Producto agregado");
  } catch (err) {
    console.log(err);
  }
};

let getProductsInCart = async (req, res) => {
  const { id } = req.params;

  try {
    let getProductos = await carritoContenedor.getAll();

    getProductos
      ? res.send(getProductos)
      : res.send({ error: "Carrito no encontrado" });
  } catch (err) {
    console.log(err);
  }
};


let deleteCarrito = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    let getCarrito = await carritoContenedor.getById(id);

    if (getCarrito) {
      await carritoContenedor.deleteByIdCarrito(id);

      res.send("Carrito eliminado con éxito");
    } else {
      res.send({ error: "Producto no encontrado" });
    }

    res.send();
  } catch (err) {
    console.log(err);
  }
};




let deleteProduct = async (req, res) => {
  let { id, id_prod } = req.params;
  try {
    let response = await carritoContenedor.deleteProductFromCart(id, id_prod);

    if (response) {
      res.send("Producto eliminado con éxito");
    } else {
      res.send({ error: "Producto no encontrado" });
    }

  } catch (err) {
    console.log(err);
  }
};

export {
  addCarrito,
  deleteCarrito,
  getProductsInCart,
  addProducts,
  deleteProduct,
};
