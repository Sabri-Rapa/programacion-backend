const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "../db/mydb.sqlite",
  },
  useNullAsDefault: true,
});

knex.schema
  .createTable("cars", (table) => {
    table.increments("id"), table.string("name"), table.integer("price");
  })
  .then(() => {
    console.log("todo bien");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });

  module.exports = {knex}