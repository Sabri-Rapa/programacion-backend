const { faker } = require("@faker-js/faker");

exports.mockProducts = (cant = 5) => {
    let products = [];
    for (let i = 0; i < cant; i++) {
      products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.vehicle.vehicle(),
        price: faker.commerce.price(10000, 20000, 0, "$"),
        thumbnail: faker.image.avatar(),
      });
    }
    return products;
}