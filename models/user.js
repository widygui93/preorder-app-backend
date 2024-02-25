'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async login(email, password){
      const user = await this.findOne({ where: { email: email } });
      if(user){
          const auth = await bcrypt.compare(password, user.dataValues.password);
          if(auth){
              return user;
          }
          throw new Error('incorrect password');
      }
      throw new Error('incorrect email');
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        is: /^[a-zA-Z .,]*$/
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [6,12]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

// execute the function before record saved to db
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    user.name = user.name.toUpperCase();
    user.email = user.email.toUpperCase();
  
  });

  // execute the function after document saved to db
  User.afterCreate( (user) => {
      console.log('new user was created & saved', user.toJSON());
  });

  return User;
};