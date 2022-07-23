/*
MENSAJE SEGÚN LA HORA
Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.
Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.
 */

const http = require('http')

//creo el server
const server = http.createServer((peticion, respuesta) => {
    const fecha = new Date
    const hora = fecha.getHours().toString()
    if(hora >= 6 && hora <= 12) respuesta.end('¡Buen día!')
    if(hora >= 13 && hora <= 19) respuesta.end('¡Buenas tardes!')
    if(hora >= 20 && hora <= 5) respuesta.end('¡Buenas noches!')

})

//mantengo conectado el server
const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
