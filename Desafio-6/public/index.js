const socket = io()

socket.on('connection', ()=>{
    console.log('You are connected')
})

let prod = []

socket.on('products', (data) =>{

     let htmlToRender = data.map( prod =>{
        return `
        <tr>
        <td> <h3>${prod.title}</h3></td>
        <td> <h3>${prod.price}</h3></td>
        <td> <img src=${prod.thumbnail}/></td>
        </tr>
        `
    })

    

    document.querySelector('#products').innerHTML = htmlToRender
})


socket.on('chat', (data) =>{

     let htmlToRender = data.map( chat =>{
        return `
        <tr>
        <td> <h3>${chat.email}</h3></td>
        <td> <h3>${chat.message}</h3></td>
        <td> <h3>${chat.date}</h3></td>
        </tr>
        `
    })

    

    document.querySelector('#message').innerHTML = htmlToRender
})

function addMessage(messageForm){
    let messageToAdd = {
        email: messageForm.email.value,
        message: messageForm.message.value,
        date: new Date().toLocaleDateString(),
    }

    socket.emit('newMessage', messageToAdd)
}

function addProduct(addProduct){
    let productToAdd = {
        title: addProduct.title.value,
        price: addProduct.price.value,
        thumbnail: addProduct.thumbnail.value,
    }

    socket.emit('newProduct', productToAdd)
}