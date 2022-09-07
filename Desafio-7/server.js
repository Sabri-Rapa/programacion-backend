const express = require("express");
const { engine } = require("express-handlebars");
const PORT = 8080;
const app = express();
const { options: SQLite } = require("./options/SQLite");
const { options: MySQL } = require("./options/mariaDB");
const knexsqlite = require('knex')(SQLite)
const knexmysql = require('knex')(MySQL)

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*" },
});

const Contenedor = require("./Contenedor");

const contenedorProductos = new Contenedor(MySQL, "products");
const contenedorChat = new Contenedor(SQLite, "messages");


knexsqlite.schema
  .createTableIfNotExists("messages", (table) => {
    table.increments("id"), table.string("email"), table.string("message"), table.string("date");
  })
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knexsqlite.destroy();
  });


  knexmysql.schema
  .createTableIfNotExists("products", (table) => {
    table.increments("id"), table.string("title"), table.integer("price"), table.string("thumbnail");
  })
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knexmysql.destroy();
  });




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/* Configuración del motor*/
app.set("view engine", "hbs");
app.set("views", "./views");
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);


app.get("/", async (req, res) => {
    try {
      res.render("products", { root: __dirname + "/public" })
    } catch (err) {
      console.log(err);
    }
  });
  
  

io.on("connection", async (socket) => {
  console.log("New connection");

  let allProducts = await contenedorProductos.getAll()
  let allMessages = await contenedorChat.getAll()

  io.sockets.emit("products", allProducts);
  io.sockets.emit("chat", allMessages);


  socket.on("newProduct", async (data) => {
    await contenedorProductos.save(data)
    io.sockets.emit("products", allProducts);
  });

  socket.on("newMessage", async (msg) => {
    await contenedorChat.save(msg)
    io.sockets.emit("chat", allMessages);
  });
});

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor");
});
