const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

//El ejemplo selecciona todos los coches y los ordena por precio en orden descendente.

knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then(rows => {
        for(row of rows){
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch(err => {console.log(err); throw err})
    .finally(() =>{
        knex.destroy();
    })