const { options } = require("./options/mariaDB");
const knex = require("knex")(options);

// El ejemplo elimina autos cuyo precio es superior a 50000
knex.from('cars').del()
.then(() => console.log('All cars deleted'))
.catch(err => {console.log(err); throw err})
.finally(() =>{
    knex.destroy();
}) 