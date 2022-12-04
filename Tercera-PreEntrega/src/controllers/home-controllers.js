const ProductosContenedor = require("../contenedores/ProductosContenedor");
const CarritoContenedor = require("../contenedores/CarritoContenedor");
const dbMongoAtlasConection = require("../../db/mongoAtlas");
const { productos } = require("../../db/models/productos");
const Carritos = require("../../db/models/carrito");
const prodCont = new ProductosContenedor(dbMongoAtlasConection, productos);
const carritoCont = new CarritoContenedor(dbMongoAtlasConection, Carritos);
const User = require("../../db/models/users");

exports.getHome = async (req, res) => {

  try {
    if (!req.user.cart_id) {
      let newCartId = await carritoCont.save(req.user._id);
      await User.findOneAndUpdate({ _id: req.user._id }, { cart_id: newCartId });
    }

    let allProductos = await prodCont.getAll();
    console.log(req.user)

    res.render("pages/home", {
      name: req.session.username,
      products: allProductos,
    });
  } catch (err) {
    console.log(err);
  }
};
