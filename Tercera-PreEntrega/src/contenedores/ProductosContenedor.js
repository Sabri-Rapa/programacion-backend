class ProductosContenedor {
  constructor(options, model) {
    this.conectionDB = options;
    this.model = model;
  }

  async getAll() {
    try {
      let data = await this.model.find();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async getById(id) {
    try {
      let found = this.model.findById(id);
      if (found) {
        return found;
      } else {
        return "No hay resultados que corresponda con el id";
      }
    } catch (err) {
      console.log(err);
    }
  }

  async save(object) {
    try {
      let nuevoProducto = new this.model(object);
      await nuevoProducto.save();
    } catch (err) {
      console.log(err);
    }
  }

  async deleteById(id) {
    try {
      await this.model.findByIdAndDelete(id);
      return "Eliminado correctamente";
    } catch (err) {
      console.log(err);
    }
  }

  async updateProducto(id, productoModificado) {
    try {
      await this.model.findByIdAndUpdate(id, {
        nombre: productoModificado.nombre,
        precio: productoModificado.precio,
        thumbnail: productoModificado.thumbnail,
        descripcion: productoModificado.descripcion,
        fecha: productoModificado.date,
        stock: productoModificado.stock,
      });
      return "Modificado correctamente";
    } catch (err) {
      console.log(err);
    }
  }
  async addToCart(id, producto) {
    try {
      await this.model.findByIdAndUpdate(id, {
        $push: {
          productos: producto,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

}

module.exports = ProductosContenedor;
