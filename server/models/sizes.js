'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sizes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sizes.hasMany(models.cars, {
        foreignKey: 'sizes_id'
      })
    }
  }
  sizes.init({
    size_category: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sizes',
    tableName: 'sizes',
    paranoid: true
  });
  return sizes;
};