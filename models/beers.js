'use strict';

module.exports = (sequelize, DataTypes) => {
  const Beers = sequelize.define('Beers', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    abv: DataTypes.TEXT,
    ibu: DataTypes.TEXT,
    style: DataTypes.TEXT,
    wishlist: DataTypes.BOOLEAN,
    favorite: DataTypes.BOOLEAN
  }, {});
  Beers.associate = function(models) {
    Beers.belongsToMany(models.Breweries, { 
      through: 'BeersBreweries',
      foreignKey: 'beersId',
      otherKey: 'breweriesId'
    });
  };
  return Beers;
};