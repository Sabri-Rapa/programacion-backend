const { connect } = require('mongoose');
// import { Usuarios } from './models/usuario.js';

async function connectMG() {
  try {
    return await connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });
  } catch (e) {
    console.log(e);
  }
}

module.exports = connectMG

