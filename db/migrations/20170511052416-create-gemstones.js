'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('gemstones', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
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

  down: function (queryInterface) {
    return queryInterface.dropTable('gemstones')
  }
}
