const ContenedorMemoria = require('../conenedores/ContenedorMemoria.js');
const generarUsuario = require('../utils/geradorDeUsuarios.js');
const generarId = require('../utils/generadorDeIds.js');

class ApiUsuariosMock extends ContenedorMemoria {
    constructor(){
        super();
    }

    popular(cant = 50) {
        const nuevos = [];
        for(let i = 0; i < cant; i++){
            const nuevoUsuario = generarUsuario(generarId());
            const guardado = this.guardar(nuevoUsuario);
            nuevos.push(guardado);
        }
        return nuevos;
    }
}

module.exports = ApiUsuariosMock