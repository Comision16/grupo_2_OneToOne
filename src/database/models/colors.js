
   
  'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class colors extends Model {
    static associate(models) {
      // Definir la asociación con la tabla Products a través de la tabla pivote colorsProducts
      this.belongsToMany(models.products, { 
        foreignKey : 'colorsId',
        otherKey: 'produtsId',
        through: 'products_colors' 
      });
    }
  };

  colors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colors',
  });
  
  return colors;
};