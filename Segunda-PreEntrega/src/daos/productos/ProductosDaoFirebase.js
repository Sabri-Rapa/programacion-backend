import { queryProductos } from '../../../dbs/options/firebase.js'

import Contenedor from '../../contenedores/ContenedorFirebase.js'

class ProductosDAOFirebase extends Contenedor {
    constructor(){
        super(queryProductos)
    }
}

export default ProductosDAOFirebase;