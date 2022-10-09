const express = require('express')
const usuariosRouter = require('./router/usuarios.js')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(__dirname + '/public'))

app.use('/api/usuarios', usuariosRouter)

const server = app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

server.on('error', error =>{
    console.log('Error en el servidor')
})
