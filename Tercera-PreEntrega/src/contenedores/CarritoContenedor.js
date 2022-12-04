const User = require('../../db/models/users')

class CarritoContenedor {
  constructor(options, model) {
    this.conectionDB = options;
    this.model = model;
  }

  save = async (userId) => {
    try {
      let nuevoCarrito = await this.model.create({ user_id: userId });

      return nuevoCarrito.id;
    } catch (err) {
      console.log(err);
    }
  };

  getCart = async (cartId) => {
    try {
      return this.model.findOne({ _id: cartId });
    } catch (error) {
      throw Error(error);
    }
  };

  saveProductInCart = async (cartId, product) => {
    await this.model.findByIdAndUpdate(
      { _id: cartId },
      { $addToSet: { productos: product } }
    );

    return;
  };

  deleteProductFromCart = async (idCart, idProd) => {
    try {
      let cart = await this.model.findOne({ _id: idCart });

      let prodsfiltered = cart.productos.filter(
        (element) => element.nombre != product.nombre
      );

      await this.model.findByIdAndUpdate(
        { _id: idCart },
        { products: prodsfiltered }
      );

      return await this.model.findOne({ _id: idCart });
    } catch (err) {
      console.log(err);
    }
  }

  deleteByIdCarrito = async (cartId) => {
    try {
      await this.model.findByIdAndUpdate({ _id: cartId }, { products: [] });

      await User.findOneAndUpdate({ cart_id: cartId }, { $unset: { cart_id: 1 } });
      return;
    
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = CarritoContenedor;
