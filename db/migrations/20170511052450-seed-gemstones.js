'use strict'
const UUID = require('uuid')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let gemstone_list = []
    // -------------------------------------------------------------------------------10gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Azurite (opaque mottled deep blue)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Banded agate (translucent striped brown, blue, white or red',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Blue quartz (transparent pale  blue)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Eye agate (translucent circles of gray, white, brown, blue or green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Hematite (opaque gray black)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Lapis lazuli (opaque light and dark blue with yellow flecks)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Malachite (opaque striated light and dark green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Moss agate (translucent pink or yellow-white with mossy gray or' +
      ' green markings)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Obsidian (opaque black)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Rhodonchrosite (opaque light pink)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Tiger eye (translucent brow with golden center)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 10,
      description: 'Turquoise (opaque light blue-green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // -------------------------------------------------------------------------------50gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Bloodstone (opaque dark gray with red flecks)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Carnelian (opaque orange to red-brown)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Chalcedony (opaque white)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Chrysoprase (translucent green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Citrine (transparent pale yellow-brown)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Jasper (opaque blue, black, or brown)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Moonstone (translucent white with pale blue glow)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Onyx (opaque bands of black and white, or pure black or white)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Quartz (transparent white, smoky gray, or yellow)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Sardonyx (opaque bands of red and white)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Star rose quartz (translucent rosy stone with white star-shaped' +
      ' center)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 50,
      description: 'Zircon (transparent pale blue-green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // ------------------------------------------------------------------------------100gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Amber (transparent watery gold to rich gold)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Amethyst (transparent deep purple)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Chrysoberyl (transparent yellow-green to pale green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Coral (opaque crimson)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Garnet (transparent red, brown-green, or violet)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Jade (translucent light green, deep green, or white)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Jet (opaque deep black)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Pearl (opaque lustrous white, yellow, or pink)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Spinel (transparent red, red-brown, or deep green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 100,
      description: 'Tourmaline (transparent pale green, blue, brown, or red)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // ------------------------------------------------------------------------------500gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Alexandrite (transparent dark green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Aquamarine (transparent pale blue-green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Black pearl (opaque pure black)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Blue spinel (transparent deep blue)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Peridot (transparent rich olive green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 500,
      description: 'Topaz (transparent golden yellow)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // -----------------------------------------------------------------------------1000gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Black opal (translucent dark green with black mottling and golden' +
      ' flecks)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Blue sapphire (transparent blue-white to medium blue)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Emerald (transparent deep brigh green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Fire opal (translucent fiery red)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Opal (translucent pale blue with green and golden mottling)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Star ruby (translucent ruby with white star-shaped center)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Star sapphire (translucent blue sapphire with white star-shaped' +
      ' center',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 1000,
      description: 'Yellow sapphire (transparent fiery yellow or yellow-green)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    // -----------------------------------------------------------------------------5000gp
    gemstone_list.push({
      id: UUID.v4(),
      value: 5000,
      description: 'Black sapphire (translucent lustrous black with glowing highlights)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 5000,
      description: 'Diamond (transparent blue-white, canary, pink, brown, or blue)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 5000,
      description: 'Jacinth (transparent fiery orange)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    gemstone_list.push({
      id: UUID.v4(),
      value: 5000,
      description: 'Ruby (transparent clear red to deep crimson)',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })

    return queryInterface.bulkInsert('gemstones', gemstone_list, {}).then(() => {
      console.log('seed-gemstones completed')
    })
  },
  down: function (queryInterface, Sequelize) {}
}
