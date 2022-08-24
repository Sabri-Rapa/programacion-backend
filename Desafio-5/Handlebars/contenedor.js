const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = "./" + file + ".json";
  }

  async save(object) {
    try {
      const data = await fs.promises.readFile(this.file, "utf-8");
      const dataNotJson = JSON.parse(data);
      const ids = dataNotJson.map((e) => e.id).sort();
      let aux = ids[ids.length - 1];

      object.id = aux + 1;
      let price = parseInt(object.price);
      object.price = price;
      dataNotJson.push(object);

      let dataJson = JSON.stringify(dataNotJson);
      await fs.promises.writeFile(this.file, dataJson);
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
        return found;
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

  async update(id, productoModificado) {
    const data = await fs.promises.readFile(this.file, "utf-8");
    const dataNotJson = JSON.parse(data);
    productoModificado.id = parseInt(id);
    let dataModificada = dataNotJson.map((e) => {
      if (e.id == id) {
        return (e = productoModificado);
      } else {
        return e;
      }
    });
    let dataJson = JSON.stringify(dataModificada);
    await fs.promises.writeFile(this.file, dataJson);
  }
}

module.exports = Contenedor;
