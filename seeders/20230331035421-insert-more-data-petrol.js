'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('petrols', [
      {
        id_petrol: 'PDL001',
        name_petrol: 'PERTAMINA DEX LITE',
        cost_petrol: 14950,
        path_img_petrol: 'image/dexlite.png',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          id_petrol: 'PDX001',
          name_petrol: 'PERTAMINA DEX',
          cost_petrol: 15850,
          path_img_petrol: 'image/dex.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_petrol: 'PML001',
          name_petrol: 'PERTAMINA LITE',
          cost_petrol: 10000,
          path_img_petrol: 'image/lite.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_petrol: 'PMT001',
          name_petrol: 'PERTAMINA TURBO',
          cost_petrol: 15100,
          path_img_petrol: 'image/turbo.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_petrol: 'PMX001',
          name_petrol: 'PERTAMINA MAX',
          cost_petrol: 13300,
          path_img_petrol: 'image/pertamax.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
