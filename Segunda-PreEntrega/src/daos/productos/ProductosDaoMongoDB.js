import db from '../../../dbs/options/mongoDB.js'
import productosModel from '../../../dbs/models/productos.js'
import Contenedor from '../../contenedores/ContenedorMongoDB.js'

class ProductosDAOMongoDB extends Contenedor {
    constructor(){
        super(db, productosModel)
    }
}

export default ProductosDAOMongoDB;