'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Status extends Model {
    static associate(models) {
      // Definir asociaciones si las hay
    }
  }

  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status', 
  });

  return Status;
};