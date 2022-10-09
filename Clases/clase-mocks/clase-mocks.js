const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(__dirname + '/public'))


const server = app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

server.on('error', error =>{
    console.log('Error en el servidor')
})


const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

app.get('/test', (req, res) =>{
    let arr = []
    for(let i = 0; i < 10; i++){
        let obj = {}
        obj.randomNombre = nombres[Math.floor(Math.random() * nombres.length)]
        obj.randomApellidos = apellidos[Math.floor(Math.random() * apellidos.length)]
        obj.randomColores = colores[Math.floor(Math.random() * colores.length)]
        arr.push(obj)
    }
    res.send(arr)
})