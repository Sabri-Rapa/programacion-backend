const express = require('express')
const routes = require('./routes')
const connectMG = require('./dbMongo')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(__dirname + '/public'))

app.use('/api', routes)

const db = connectMG();
if (db)console.log('Conexión a Mongo Ok')
if (!db) throw 'can not connect to the db';


const server = app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

server.on('error', error =>{
    console.log('Error en el servidor')
})