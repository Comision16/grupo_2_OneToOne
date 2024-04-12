'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Define la relación con el modelo Status
      Order.belongsTo(models.Status, {
        foreignKey: 'statusId', // Campo que representa la clave foránea en la tabla Order
        as: 'status' // Alias para la relación
      });
    }
  }
  Order.init({
    usersId: DataTypes.INTEGER,
    dateOrder: DataTypes.DATE,
    total: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};