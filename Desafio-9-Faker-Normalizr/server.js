const express = require("express");
const routes = require("./src/routes");
const MessagesContenedor = require('./src/contenedores/MessagesContenedor')
const db = require('./db/options/mongoDB')
const Messages = require('./db/models/messages')
const {normalizeMessages} = require('./src/normalizr/messages')

const PORT = 8080;

const app = express();

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*" },
});

const msgCont = new MessagesContenedor(db, Messages)

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Inicialización de ejs
app.set("view engine", "ejs");

app.use("/api", routes);

//ruta de servidor Api Rest
app.use("/", (req, res) => {
  res.render("pages/index", {  });
});




io.on("connection", async (socket) => {
  console.log("New connection:" + socket.id);

  let allMessages = await msgCont.getAll()

  io.sockets.emit("chat", normalizeMessages(allMessages));

  socket.on("newMessage", async (msg) => {
    let newMsg = JSON.parse(msg)
    await msgCont.save(newMsg)
    let allMsg = await msgCont.getAll()

    io.sockets.emit("chat", normalizeMessages(allMsg));
  });

});

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  });
  
  server.on("error", (error) => {
    console.log("Error en el servidor");
  });
  