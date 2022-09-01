const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = "./" + file + ".json";
  }
  

  async crearCarrito(object) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);

      if(dataNotJson.length){
      const ids = dataNotJson.map((e) => e.id).sort();
      let aux = ids[ids.length - 1];


      object.id = aux + 1;
    }else{
      object.id = 1;

    }
      object.timestamps = new Date().toLocaleString()

      dataNotJson.push(object);

      let dataJson = JSON.stringify(dataNotJson);
      await fs.promises.writeFile(this.file, dataJson);
      return object.id;
    } catch (err) {
      console.log(err);
    }
  }

  async agregarProducto(id, body) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);

      let carritoSelected = dataNotJson.find((e) => e.id == id);

      let withoutCarritoSelected = dataNotJson.filter((e) => e.id != id);

      if (carritoSelected.productos.length) {
        const ids = carritoSelected.productos.map((e) => e.id).sort();
        let aux = ids[ids.length - 1];
        body.id = aux + 1;
      }

      if (!carritoSelected.productos.length) {
        body.id = 1;
      }

      carritoSelected.productos.push(body);

      withoutCarritoSelected.push(carritoSelected);

      let dataJson = JSON.stringify(withoutCarritoSelected);
      await fs.promises.writeFile(this.file, dataJson);
      return;
    } catch (err) {
      console.log(err);
    }
  }

  async getById(id) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);
      const found = dataNotJson.find((e) => e.id == id);
      if (found) {
        return found.productos;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);
      return dataNotJson;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteByIdCarrito(id) {
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

  async deleteByIdProducto(id_carr, id_prod) {
    try {
      console.log(id_carr, id_prod);
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);

      let carritoSelected = dataNotJson.find((e) => e.id == id_carr);
      console.log("carritoSelected", carritoSelected);
      let withoutCarritoSelected = dataNotJson.filter((e) => e.id != id_carr);

      const whitoutProductId = carritoSelected.productos.filter(
        (e) => e.id != id_prod
      );

      carritoSelected.productos = whitoutProductId;

      withoutCarritoSelected.push(carritoSelected);

      let dataJson = JSON.stringify(withoutCarritoSelected);
      await fs.promises.writeFile(this.file, dataJson);
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Contenedor;
