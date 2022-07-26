const fs = require('fs')
const express = require('express')
const app = express()
const Contenedor = require('../../Clase-Desafio-2/desafio-2')

app.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080')
})


const contenedor = new Contenedor('productos')


app.get("/productos", async (req, res)=>{
    const products = await contenedor.getAll()
    console.log(products)
    res.send(products)
})

app.get("/productoRandom", async (req, res)=>{
    const products = await contenedor.getAll()
    let productoRandom = products[Math.floor(Math.random()*products.length)]
    res.send(productoRandom)
})