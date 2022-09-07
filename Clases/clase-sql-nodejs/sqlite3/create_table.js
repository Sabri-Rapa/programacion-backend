const knex = require('./options/SQLite.js')
// const knex = require("knex")(options);

knex.schema
  .createTable("otraTable", (table) => {
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
