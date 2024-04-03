'use strict';
const productJSON = require('../../data/products.json')

const productDB = productJSON.map((products, index) => {
  return {
    name: products.name,
    description: products.description,
    price: parseInt(products.price),
    descount: 0,
    image: products.image,
    categoryId: products.category == "REMERAS" ? 1 : products.category == "PANTALONES" ? 2 : products.category == "ABRIGOS" ? 3 : products.category == "ACCESORIOS" ? 4 : products.category == "CAMISAS" ? 5 : 1,
    setionId: products.category == "REMERAS" ? 1 : products.category == "PANTALONES" ? 2 : products.category == "ABRIGOS" ? 3 : products.category == "ACCESORIOS" ? 4 : products.category == "CAMISAS" ? 5 : 1,

    createdAt: new Date(),
    updatedAt: new Date(),
  }
})




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert(
      'products',
      productDB,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  }
};
