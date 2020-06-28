'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BeersBreweries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beersId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Beers',
          key: 'id'
        }
      },
      breweriesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Breweries',
          key: 'id'
        }
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
    return queryInterface.dropTable('BeersBreweries');
  }
};
