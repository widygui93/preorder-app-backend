'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Preorder.init({
    id_preorder: DataTypes.STRING,
    id_user: DataTypes.STRING,
    latest_status_preorder: DataTypes.STRING,
    desc_preorder: DataTypes.STRING,
    total_cost_preorder: DataTypes.INTEGER,
    total_quantity_preorder: DataTypes.INTEGER,
    date_time_created: DataTypes.DATE,
    shipping_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Preorder',
  });
  return Preorder;
};