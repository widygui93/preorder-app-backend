'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Petrol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Petrol.init({
    name_petrol: DataTypes.STRING,
    cost_petrol: DataTypes.INTEGER,
    path_img_petrol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Petrol',
  });
  return Petrol;
};