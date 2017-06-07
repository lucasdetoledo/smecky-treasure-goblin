'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('magic_items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rarity: {
        allowNull: false,
        type: Sequelize.ENUM('Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary')
      },
      modifier: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM('Armor', 'Wondrous Item', 'Scroll', 'Weapon', 'Rod', 'Staff',
        'Wand', 'Potion', 'Ring')
      },
      sub_type: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      page: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('magic_items')
  }
}
