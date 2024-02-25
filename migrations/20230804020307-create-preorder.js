'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_preorder: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.STRING
      },
      latest_status_preorder: {
        type: Sequelize.STRING
      },
      desc_preorder: {
        type: Sequelize.STRING
      },
      total_cost_preorder: {
        type: Sequelize.INTEGER
      },
      total_quantity_preorder: {
        type: Sequelize.INTEGER
      },
      date_time_created: {
        type: Sequelize.DATE
      },
      shipping_address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preorders');
  }
};