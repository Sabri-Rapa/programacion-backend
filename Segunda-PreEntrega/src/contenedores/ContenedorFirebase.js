class Contenedor {
  constructor(queryProductos) {
    this.queryProductos = queryProductos;
  }

  async save(object) {
    try {
      console.log("llegue");

      await this.queryProductos.add(object);
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      let data = await this.queryProductos.get();
      const productos = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return productos;
    } catch (err) {
      console.log(err);
    }
  }

  async updateProducto(id, productoModificado) {
    try {
      await this.queryProductos.doc(id).update({
        nombre: productoModificado.nombre,
        precio: productoModificado.precio,
        thumbnail: productoModificado.thumbnail,
        descripcion: productoModificado.descripcion,
        stock: productoModificado.stock,
      });
      return "Modificado correctamente";
    } catch (err) {
      console.log(err);
    }
  }

  async getById(id) {
    try {
      let found = await this.queryProductos.doc(id).get();
      if (found) {
        const producto = { id: found.id, ...found.data() };
        return producto;
  } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteById(id) {
    try {
      await this.queryProductos.doc(id).delete();
      return "Eliminado correctamente";
    } catch (err) {
      console.log(err);
    }
  }

}

export default Contenedor;
