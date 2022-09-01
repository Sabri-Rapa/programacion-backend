const Contenedor = require("../ContenedorProductos");
const contenedor = new Contenedor("productos");

let allProducts = async (req, res) => {
    const { id } = req.query;

    try {
      if (id) {
        let getProduct = await contenedor.getById(id);
  
        getProduct
          ? res.send(getProduct)
          : res.send({ error: "Producto no encontrado" });
      } else {
        let getAllProducts = await contenedor.getAll();
        res.send(getAllProducts);
      }
    } catch (err) {
      console.log(err);
    }
  }


let addProduct = async (req, res) => {
    const { body } = req;
    try {
      await contenedor.save(body);
      res.send({ Estado: "success", producto: body });
    } catch (err) {
      console.log(err);
    }
  }

  let modifyProduct = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      let getProduct = await contenedor.getById(id);
  
      if (getProduct) {
        await contenedor.update(id, body);
        res.send({ producto_modificado: body });
      } else {
        res.send({ error: "Producto no encontrado" });
      }
    } catch (err) {
      console.log(err);
    }
  }


  let deleteProductById = async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    try {
      let getProduct = await contenedor.getById(id);
  
      if (getProduct) {
        await contenedor.deleteById(id);
  
        res.send({ producto_eliminado: getProduct });
      } else {
        res.send({ error: "Producto no encontrado" });
      }
  
      res.send();
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {allProducts, addProduct, modifyProduct, deleteProductById}