'use strict';

module.exports = (sequelize, DataTypes) => {
  const Breweries = sequelize.define('Breweries', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    established: DataTypes.TEXT,
    images: DataTypes.TEXT,
    streetAddress: DataTypes.TEXT,
    locality: DataTypes.TEXT,
    region: DataTypes.TEXT,
    postalCode: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    wishlist: DataTypes.BOOLEAN,
    favorite: DataTypes.BOOLEAN
  }, {});
  Breweries.associate = function(models) {
    Breweries.belongsToMany(models.Beers, { through: 'BeersBreweries' });
  };
  return Breweries;
};