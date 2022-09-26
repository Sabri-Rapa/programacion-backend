import db from '../../../dbs/options/mongoDB.js'
import carritoModel from '../../../dbs/models/carrito.js'
import Contenedor from '../../contenedores/ContenedorMongoDB.js'

class CarritoDAOMongoDB extends Contenedor {
    constructor(){
        super(db, carritoModel)
    }
}

export default CarritoDAOMongoDB;