const mongoose = require("mongoose");

const dbMongoAtlasConection = async () => {
  try {
    const connection = mongoose.connect("mongodb+srv://sabrihr:sabripass@cluster0.3wmnfr7.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})


    return connection;

  } catch (err) {
    console.log(err);
  }
};

const db = dbMongoAtlasConection();
if(db) console.log('Conectado a Mongo Atlas')
if(!db) throw 'No se pudo conectar Mongo Atlas'


module.exports = db;