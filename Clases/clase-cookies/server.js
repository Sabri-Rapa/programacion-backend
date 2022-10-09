const cookieParser = require("cookie-parser");
const express = require("express");
const session = require('express-session')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const routerCookies = require('./desafioGenerico')
app.use('/cookies', routerCookies)




// COOKIE PARSER
// app.use(cookieParser("A secret"));

// app.get('/crearCookie', (req, res) =>{
//     res.cookie('logueado', 'true', {signed: true, httpOnly: true}).send('<h1>Guardamos tu cookie</h1>')
// })

// app.get('/recuperarCookie', (req, res) =>{
//     console.log(req.cookies)
//     console.log(req.signedCookies)

//     // let cookies = req.cookies.logueado
//     let cookies = req.cookies

//     res.send(cookies)
// })
// app.get('/borrarCookie', (req, res) =>{
//     res.clearCookie('logueado').send('<h1>Cookie borrada</h1>')
// })

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// SESSION

// app.use(
//   session({
//     secret: 'el secreto',
//     resave: true,
//     saveUninitialized: true
//   })
// )



// SESSION-FILE-STORE
// const FileStore = require('session-file-store')(session);

// app.use(
//   session({
//     store: new FileStore({ path: './sesiones', ttl: 300, retries: 0 }),
//     secret: 'el secreto',
//     resave: false,
//     saveUninitialized: false
//   })
// )




// SESSION CON REDIS
const redis = require("redis");
const client = redis.createClient({
  legacyMode: true,
});
client.connect();
const RedisStore = require("connect-redis")(session);

app.use(
  session({
    store: new RedisStore({ host: "localhost", port: 6379, client, ttl: 300 }),    secret: 'el secreto',
    resave: false,
    saveUninitialized: false
  })
)


// SESSION CON MONGO
const MongoStore = require("connect-mongo");

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://guillermofergnani:asdasd@cluster0.my1pzfu.mongodb.net/",
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: 'el secreto',
    resave: false,
    saveUninitialized: false
  })
)


const routerSession = require('./desafioGenerico2')
app.use('/session', routerSession)

app.get('/login', (req, res) => {
  const { username, password } = req.query;
  if(username !== 'pepe' || password !== "pepepass"){
    return res.send('login failed')
  }
  req.session.user = username;
  req.session.admin = true;
  res.send('login success!')
})

app.get('/verCookies', (req, res) => {
  console.log(req.session.user)
  console.log(req.session.admin)
})


function checkAdmin(req, res, next){
  if(!req.session.admin) return res.status(403).send('No autorizado')
  return next();
}

app.get('/soloParaAdmin', checkAdmin, (req, res) => {
  res.send('reportes secretos')
})

app.get('/logout', (req, res) => {
  req.session.destroy( err => {
    if(err) {
      return res.json({ status: 'Logout ERROR', body: err})
    }
    res.send('Logout ok!')
  })
})




const server = app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});

server.on("error", (error) => {
  console.log("Error en el servidor");
});




