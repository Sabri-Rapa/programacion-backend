const fs = require('fs')
const express = require('express')
const app = express()

app.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080')
})

const products = fs.readFileSync('./productos.json', 'utf-8')

app.get("/productos", (req, res)=>{
    res.send(products)
})

app.get("/productoRandom", (req, res)=>{
    let productsNotJason = JSON.parse(products)
    let productoRandom = productsNotJason[Math.floor(Math.random()*productsNotJason.length)]
    res.send(productoRandom)
})