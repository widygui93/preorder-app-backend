'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('petrols', [
      {
      id_petrol: 'PBS001',
      name_petrol: 'PERTAMINA BIO SOLAR',
      cost_petrol: 6800,
      path_img_petrol: 'image/bio-solar.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('petrols', null, {});
  }
};
