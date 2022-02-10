'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    books_written: DataTypes.STRING,
    date_of_birth: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Author',
    timestamps:false,
    tableName: 'students'
  });
  return Author;
};