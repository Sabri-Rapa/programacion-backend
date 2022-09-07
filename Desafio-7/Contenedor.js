class Contenedor {
  constructor(options, table) {
    this.knex = require("knex")(options);
    this.table = table;
  }

  async save(object) {
    try {
      await this.knex(this.table).insert(object);
    } catch (err) {
      console.log(err);
    } 
  }

  async getById(id) {
    try {
      let found = this.knex(this.table).where("id", id);
      if (found) {
        return found;
      } else {
        return "No hay producto que corresponda con el id";
      }
    } catch (err) {
      console.log(err);
    } 
  }

  async getAll() {
    try {
      let data = await this.knex.from(this.table).select("*");
      return data;
    } catch (err) {
      console.log(err);
    } 
  }

  async deleteById(id) {
    try {
      await this.knex.from(this.table).where("id", id).del();
      return "Eliminado correctamente";
    } catch (err) {
      console.log(err);
    } 
  }

  async update(id, productoModificado) {
    try {
      await this.knex
        .from(this.table)
        .where("id", id)
        .update(productoModificado);

      return "Modificado correctamente";
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Contenedor;
