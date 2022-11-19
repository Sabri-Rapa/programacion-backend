const express = require("express");
const routes = require("./src/routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const http = require("http");
const { Server } = require("socket.io");
const compression = require("compression");
const { logger } = require("./src/utils/loggers");


const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `./.env`),
});

const { SESSION_SECRET } = process.env


// const yargs = require('yargs/yargs')(process.argv.slice(2))
// const args = yargs
//   .default({
//     PORT: 8080
//   })
//  .argv
//  const PORT = process.argv.slice(2).toString() || args.PORT 

//  let MODO;
// if (args["_"].includes("CLUSTER")) {
//   MODO = "CLUSTER";
// } else {
//   MODO = "FORK";
// }

const PORT = process.env.PORT || 8080


const app = express();
app.use(compression());

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*" },
});

const socketConnection = require("./src/utils/messages-socket");

// LOGIN ---------------------------------------
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const redis = require("redis");
const client = redis.createClient({ legacyMode: true });
client.connect();
const RedisStore = require("connect-redis")(session);
const Users = require('./db/models/users')
const { validatePassword, hash } = require('./src/utils/password')
// -------------------------------------------------

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// LOGIN
passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    Users.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        console.log("Usuario no encontrado: " + username);
        return done(null, false);
        //null significa sin error, y false parametro a enviar
      }
      if (!validatePassword(user, password)) {
        console.log("Constraseña inválida");
        return done(null, false);
      }
      return done(null, user);
    });
  })
);



// SINGUP
passport.use(
  "signup",
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      Users.findOne({ username: username }, function (error, user) {
        if (error) {
          console.log("Error de registro: " + error);
          return done(error);
        }
        if (user) {
          console.log("El nombre de usuario está en uso");
          return done(null, false);
        }
        const newUser = {
          username: username,
          password: hash(password),
        };
        Users.create(newUser, (err, user) => {
          if (err) {
            console.log("Error: " + err);
            return done(err);
          }
          console.log("Registro exitoso");
          return done(null, user);
        });
      });
    }
  )
);

// PASSPORT MIDDLEWARES
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, done);
});


//  REDIS
app.use(
  session({
    store: new RedisStore({ host: "localhost", port: 6379, client, ttl: 300 }),
    secret: SESSION_SECRET,
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 86400000, // 1 dia
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  })
);


// Inicializacion de EJS
app.set("view engine", "ejs");
app.set("views", "./views");


// MIDDLEWARE PASSPORT
app.use(passport.initialize());
app.use(passport.session());





app.use((req, res, next) => {
  logger.info({ URL: req.originalUrl, method: req.method });
  next();
});

app.use("/api", routes);


const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor: " + error);
});
