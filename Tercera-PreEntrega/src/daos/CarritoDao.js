const db = require('../../db/mongoAtlas.js')
const carritoModel = require('../../db/models/carrito.js')
const CarritoContenedor = require('../contenedores/CarritoContenedor')

class CarritoDAO extends CarritoContenedor {
    constructor(){
        super(db, carritoModel)
    }
}

module.exports = CarritoDAO;