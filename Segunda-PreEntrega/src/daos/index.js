import ProductosDAOMongoDB from "./productos/ProductosDaoMongoDB.js";
import CarritoDAOMongoDB from "./carrito/CarritoDaoMongoDB.js";

import ProductosDAOFirebase from "./productos/ProductosDaoFirebase.js";

const contenedores = (db) =>{

    if(db === 'mongoDB'){
        return {
            productos: new ProductosDAOMongoDB(),
            carrito: new CarritoDAOMongoDB()
        }
    }

    if(db === 'firebase'){
        return {
            productos: new ProductosDAOFirebase(),
        }
    }

}

export {contenedores};