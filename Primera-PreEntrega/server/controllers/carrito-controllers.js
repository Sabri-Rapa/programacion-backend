const Contenedor = require("../ContenedorCarrito");
const contenedor = new Contenedor("carrito");


let addCarrito = async (req, res) =>{
    const {body} = req
    try {
        let idNuevoCarrito = await contenedor.crearCarrito(body);
        res.send({ Estado: "success", idNuevoCarrito: idNuevoCarrito });
      } catch (err) {
        console.log(err);
      }
    
}

let deleteCarrito = async (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    try {
      let getCarrito = await contenedor.getById(id);
  
      if (getCarrito) {
        await contenedor.deleteByIdCarrito(id);
  
        res.send("Carrito eliminado con éxito");
      } else {
        res.send({ error: "Producto no encontrado" });
      }
  
      res.send();
    } catch (err) {
      console.log(err);
    }
  }


  let getProductsById = async (req, res) => {
    const { id } = req.params;
  
    try {
      let getProductos = await contenedor.getById(id);
  
      getProductos
        ? res.send(getProductos)
        : res.send({ error: "Carrito no encontrado" });
    } catch (err) {
      console.log(err);
    }
  }

  let addProducts = async (req, res) => {
    const { body } = req;
    const { id } = req.params
    try {
      await contenedor.agregarProducto(id, body);
      res.send("Producto agregado");
    } catch (err) {
      console.log(err);
    }
  }

  let deleteProduct = async (req, res) => {
    let { id, id_prod } = req.params;
    id_carr = parseInt(id);
    id_prod = parseInt(id_prod);
    try {
        let response = await contenedor.deleteByIdProducto(id_carr, id_prod);
  
        if(response){
        res.send("Producto eliminado con éxito")
      } else {
        res.send({ error: "Producto no encontrado" });
      }
  
      res.send();
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {addCarrito, deleteCarrito, getProductsById, addProducts, deleteProduct}