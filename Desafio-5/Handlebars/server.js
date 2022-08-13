const express = require('express')
const routes = require('./routes.js')
const { engine } = require('express-handlebars');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(__dirname + '/public'))

app.use('/api', routes)

/* Configuración del motor*/
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);


const server = app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

server.on('error', error =>{
    console.log('Error en el servidor')
})