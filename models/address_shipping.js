'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address_Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address_Shipping.init({
    id_user: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/,
        len: [5,24]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/,
        len: [5,24]
      }
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/,
        len: [5,24]
      }
    },
    village: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/,
        len: [5,24]
      }
    },
    code_post: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[0-9]*$/,
        len: [3,10]
      }
    },
    detail_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z0-9 .,]*$/,
        len: [5,35]
      }
    },
    nickname_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/,
        len: [4,10]
      }
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[0-9 .,-]*$/,
        len: [5,24]
      }
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[0-9 .,-]*$/,
        len: [5,24]
      }
    }
  }, {
    sequelize,
    modelName: 'Address_Shipping',
  });
  return Address_Shipping;
};