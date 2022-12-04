const contenedores = require("../daos/index.js");

const carritoContenedor = contenedores("mongoDB").carrito;
const productosContenedor = contenedores("mongoDB").productos;

const {sendPurchaseEmail} = require('../utils/sendEmails')
const sendSMS = require('../utils/sendSMS')
const sendWhatsApp = require('../utils/sendWhatsApp')

let getCarrito = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      let cart = await carritoContenedor.getCart(req.user.cart_id);

      res.send(cart);
    }
  } catch (err) {
    console.log(err);
  }
};

let viewCarrito = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      let cart = await carritoContenedor.getCart(req.user.cart_id);
console.log(cart.productos)
      res.render("pages/carrito", { cart: cart.productos });
    }
  } catch (err) {
    console.log(err);
  }
};

let addProducts = async (req, res) => {
  const { prod_id } = req.body;
  
  try {

    let cartId = await carritoContenedor.getCart(req.user.cart_id);
    let productToCart = await productosContenedor.getById(prod_id);

    await carritoContenedor.saveProductInCart(cartId.id, productToCart)

    res.redirect("/api/carrito/view");

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
  let { idCart, producto } = req.params;
  try {
    let cart = carritoContenedor.getCart(id)
    let producto  

    let response = await carritoContenedor.deleteProductFromCart(idCart, producto);

    if (response) {
      res.redirect('/api/carrito/view');
    } else {
      res.send({ error: "Producto no encontrado" });
    }

  } catch (err) {
    console.log(err);
  }
};

let buy = async (req, res) => {
  try{

      let cart = await carritoContenedor.getCart(req.user.cart_id);
      let user = req.user;

      const formattedProducts = cart.productos.map(
        (product) =>
          `Producto: ${product.nombre} <br />
        Precio: $${product.precio}
        `
      );

      await sendPurchaseEmail(formattedProducts, user);
      await sendSMS("La orden fue confirmada, su pedido esta en proceso");
      await sendWhatsApp(
        "Se ha creado una nueva orden de compra de parte de: " + req.user.name
      );

      await carritoContenedor.deleteByIdCarrito(req.user.cart_id);

      res.redirect("/api/home");

  }catch(err){
    console.log(err)
  }
}

module.exports = {
  deleteCarrito,
  getProductsInCart,
  addProducts,
  deleteProduct,
  getCarrito,
  viewCarrito,
  buy
};
