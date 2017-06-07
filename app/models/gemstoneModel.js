'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gemstone', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    value: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: false,
      type: DataTypes.UUID
    }
  }, {
    underscored: true
  })
}
