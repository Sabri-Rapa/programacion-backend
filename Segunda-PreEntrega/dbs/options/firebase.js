import admin  from 'firebase-admin';

import { createRequire } from "module"
const require = createRequire(import.meta.url)
const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://segunda-preentrega-cd901.firebaseio.com'
});

const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
if(db) console.log('Conectado a Firebase')
if(!db) console.log('No se ha podido conectar a Firebase')

const queryCarritos = db.collection('carritos');
const queryProductos = db.collection('productos');

export {
    queryCarritos,
    queryProductos,
    FieldValue

};