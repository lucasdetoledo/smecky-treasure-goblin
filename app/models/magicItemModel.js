'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('magic_item', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rarity: {
      allowNull: false,
      type: DataTypes.ENUM('Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary')
    },
    modifier: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('Armor', 'Wondrous Item', 'Scroll', 'Weapon', 'Rod', 'Staff',
        'Wand', 'Potion', 'Ring')
    },
    sub_type: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    page: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    underscored: true
  })
}
