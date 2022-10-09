const { connect } = require('mongoose');

async function connectMG() {
  try {
    return await connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });
  } catch (e) {
    return res.status(500).send({ error: err });
  }
}

const db = connectMG();
if(db) console.log('Conectado a MongoDB')
if(!db) throw 'No se pudo conectar MongoDB'

module.exports = db;