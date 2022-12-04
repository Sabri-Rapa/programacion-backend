const ProductosDAO = require("./ProductosDao.js");
const CarritoDAO = require("./CarritoDao.js");

const contenedores = (db) =>{

    if(db === 'mongoDB'){
        return {
            productos: new ProductosDAO(),
            carrito: new CarritoDAO()
        }
    }

}

module.exports = contenedores;