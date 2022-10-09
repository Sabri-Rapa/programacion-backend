const { faker } = require('@faker-js/faker')
faker.locale = 'es'

function generarUsuario(id){
    return {
        id,
        nombre: faker.name.firstName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.avatar(),
    }
}

module.exports = generarUsuario