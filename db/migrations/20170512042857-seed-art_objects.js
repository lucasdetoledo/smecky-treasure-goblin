'use strict'
const UUID = require('uuid')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let art_object_list = []
    // -------------------------------------------------------------------------------25gp
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Silver ewer',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Carved bone statuette',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Small gold bracelet',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Cloth-of-gold vestments',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Black velvet mask stitched with silver thread',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Copper chalic with silver filigree',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Pair of engraved bone dice',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Small mirror set in a painted wooden frame',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Embroidered silk handkerchief',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 25,
      description: 'Gold locket with a painted portrait inside',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // ------------------------------------------------------------------------------250gp
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Gold ring set with bloodstones',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Carved Ivory statuette',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Large gold bracelet',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Silver necklace with a gemstone pendant',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Bronze crown',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Silk robe with gold embroidery',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Large well-made tapestry',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Brass mug with jade inlay',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Box of turquoise animal figurines',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 250,
      description: 'Gold bird cage with electrum filigree',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // ------------------------------------------------------------------------------750gp
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Silver chalice set with moonstones',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Silver-plated steel longsword with jet set in hilt',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Carved harp of exotic wood with Ivory inlay and zircon gems',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Small gold idol',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Gold dragon comb set with red garnets as eyes',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Bottle stopper cork embossed with gold leaf and set with amethysts',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Ceremonial electrum dagger with a black pearl in the pommel',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Silver and gold brooch',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Obsidian statuette with gold fittings and inlay',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 750,
      description: 'Painted gold war mask',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // -----------------------------------------------------------------------------2500gp
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Fine gold chain set with a fire opal',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Old masterpiece painting',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Embroidered silk and velvet mantle set with numerous moonstones',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Platinum bracelet set with a sapphire',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Embroidered glove set with jewel chips',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Jeweled anklet',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Gold music box',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Gold circlet set with four aquamarines',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'Eye patch with a mock eye set in blue sapphire and moonstone',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 2500,
      description: 'A necklace string of small pink pearls',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // -----------------------------------------------------------------------------7500gp
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Jeweled gold crown',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Jeweled platinum ring',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Small gold statuette set with rubies',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Gold cup set with emeralds',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Gold jewelry box with platinum filigree',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: "Painted gold child's sarcophagus",
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Jade game board with solid gold playing pieces',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    art_object_list.push({
      id: UUID.v4(),
      value: 7500,
      description: 'Bejeweled ivory drinking horn with gold filigree',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })

    return queryInterface.bulkInsert('art_objects', art_object_list, {}).then(() => {
      console.log('seed-gemstones completed')
    })
  },
  down: function (queryInterface, Sequelize) {}
}
