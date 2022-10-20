const express = require('express')
const routes = require('./src/routes')
const session = require('express-session')
const MongoStore = require('connect-mongo')


const PORT = 8080

const app = express()

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: { origin: '*'}
})

const socketConnection = require('./src/utils/messages-socket')


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Inicializacion de EJS
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(
    session({
      store: MongoStore.create({
        mongoUrl:
          "mongodb+srv://sabrihr:sabripass@cluster0.3wmnfr7.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: {
          useUnifiedTopology: true,
        },
      }),
      secret: "secreto",
      cookie: { maxAge: 600000 },
      resave: false,
      saveUninitialized: false,
    })
  );
  

  app.use((req, res, next) => {
    req.session.touch();
    next();
  });
  
app.use('/api', routes)


socketConnection(io)


const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', (error) =>{
    console.log('Error en el servidor: ' + error)
})
