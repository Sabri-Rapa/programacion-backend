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
  

(async ()=>{
    try{
        console.log('---> Borramos todos los autos')
        await knex('cars').del()

        console.log('---> Insertamos autos')
        await knex('cars').insert(cars)

        console.log('---> Leemos todos los autos')
        let rows = await knex.from('cars').select('*')
        for(row of rows) console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);

        console.log('---> Insertamos un auto más')
        await knex('cars').insert({name: 'Fiat', price: 7777})

        console.log('---> Leemos todos los autos actualizados')
        rows = await knex.from('cars').select('*')
        for(row of rows) console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);

    }catch(err){
        console.log(err)
    }finally{
        knex.destroy()
    }
})()