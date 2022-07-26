const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = "./" + file + ".json";
  }

  async save(object) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);

      //NO SÉ POR QUÉ INCREMENTA 1 VEZ EL ID Y DESPUÉS SIEMPRE REPITE EL MISMO
      // let aux = 0;
      // dataNotJson.forEach((e) => {
      //   console.log('EEEEEe',e)
      //   if (e.id > aux) {
      //     aux = e.id + 1;
      //     console.log('AUX', aux)
      //     object.id = aux;
      //   }
      // });

      const ids = dataNotJson.map((e) => e.id).sort();
      let aux = ids[ids.length - 1];

      object.id = aux + 1;
      dataNotJson.push(object);

      let dataJson = JSON.stringify(dataNotJson);
      await fs.promises.writeFile(this.file, dataJson);
      console.log(aux);

    } catch (err) {
      console.log(err);
    }
  }

  async getById(id) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);
      const found = dataNotJson.find((e) => e.id === id);
      if (found) {
        console.log(found);
      } else console.log(null);
    } catch (err) {
      console.log(err);
    }
  }

  async getAll(){
    try{
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);
      return dataNotJson
    }catch(err){
      console.log(err)
    }
  }


  async deleteById(id) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);

      const whitoutId = dataNotJson.filter((e) => e.id !== id);

      let dataJson = JSON.stringify(whitoutId);
      await fs.promises.writeFile(this.file, dataJson);

    } catch (err) {
      console.log(err);
    }
  }

  async deleteAll(){
    let dataNotJson = [];
    let dataJson = JSON.stringify(dataNotJson)
    await fs.promises.writeFile(this.file, dataJson);

  }

}



const newObject = {
  title: "Cartuchera",
  price: 1000,
  thumbnail: "foto cartuchera",
};

const contenedor = new Contenedor("productos");

// contenedor.save(newObject);
// contenedor.getById(2)
// contenedor.getAll()
// contenedor.deleteById(3)
// contenedor.deleteAll()


module.exports = Contenedor
