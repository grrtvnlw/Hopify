'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Breweries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      established: {
        type: Sequelize.TEXT
      },
      images: {
        type: Sequelize.TEXT
      },
      streetAddress: {
        type: Sequelize.TEXT
      },
      locality: {
        type: Sequelize.TEXT
      },
      region: {
        type: Sequelize.TEXT
      },
      postalCode: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.TEXT
      },
      wishlist: {
        type: Sequelize.BOOLEAN
      },
      favorite: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Breweries');
  }
};