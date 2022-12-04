const socket = io()

function addProduct(addProduct){
    let productToAdd = {
        nombre: addProduct.nombre.value,
        precio: addProduct.precio.value,
        thumbnail: addProduct.thumbnail.value,
    }

    socket.emit('newProduct', productToAdd)
}