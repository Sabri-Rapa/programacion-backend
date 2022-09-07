const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

const cars = [
  { name: "Audi", price: 52642 },
  { name: "Mercedes", price: 57127 },
  { name: "Skoda", price: 9000 },
  { name: "Volvo", price: 29000 },
  { name: "Bentley", price: 35000 },
  { name: "Citroen", price: 21000 },
];

knex("cars")
  .insert(cars)
  .then(() => console.log("data inserted"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
