const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

// Seleccionamos todas las finals con la función select(). Esta vez hemos elegido la tabla con la función from(). Luego revisamos la matriz de filas devueltas e imprimimos los tres campos.

knex
  .from("cars")
  .select("*")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
