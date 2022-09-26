import express from 'express'
import {router as routesMongo} from './src/routes/mongoDB/index.js'
import {router as routesFirebase} from './src/routes/firebase/index.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('/apiMongo', routesMongo)
app.use('/apiFirebase', routesFirebase)


const server = app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

server.on('error', error =>{
    console.log('Error en el servidor')
})