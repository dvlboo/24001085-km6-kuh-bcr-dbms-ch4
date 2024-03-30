'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cars.belongsTo(models.sizes, {
        foreignKey: 'sizes_id'
      })
    }
  }
  cars.init({
    name: DataTypes.STRING,
    rent_per_day: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cars',
    tableName: 'cars',
    paranoid: true
  });
  return cars;
};