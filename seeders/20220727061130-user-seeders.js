'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
          name: "Farhan",
          profession: "Fullstack Developer",
          role: "admin",
          email: "farhan@gmail.com",
          password: await bcrypt.hash('farhan123', 10),
          created_at: new Date(),
          updated_at: new Date(),
      },
      {
        name: "Aulia",
        profession: "Fullstack Developer",
        role: "student",
        email: "aulia@gmail.com",
        password: await bcrypt.hash('aulia123', 10),
        created_at: new Date(),
        updated_at: new Date(),
    }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
