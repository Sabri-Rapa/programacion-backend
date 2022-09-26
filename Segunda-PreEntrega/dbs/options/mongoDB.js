import { connect } from 'mongoose';

async function connectMG() {
  try {
    return await connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });
  } catch (e) {
    console.log(e);
  }
}

const db = await connectMG();
if(db) console.log('Conectado a MongoDB')
if(!db) throw 'No se pudo conectar MongoDB'

export default db;