const db = require("../../db/mongoAtlas.js");
const { productos } = require("../../db/models/productos");
const ProductosContenedor = require("../contenedores/ProductosContenedor");

class ProductosDAO extends ProductosContenedor {
  constructor() {
    super(db, productos);
  }
}

module.exports = ProductosDAO;
