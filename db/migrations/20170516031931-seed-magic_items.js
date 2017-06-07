'use strict'
const UUID = require('uuid')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let magic_item_list = []
    // ----------------------------------------------------------------------------------a
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Adamantine Armor',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Armor',
      sub_type: ['Chain Shirt', 'Scale Mail', 'Breastplate', 'Half Plate', 'Ring Mail',
        'Chain Mail', 'Splint', 'Plate'],
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Alchemy Jug',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ammunition',
      rarity: 'Uncommon',
      modifier: '1',
      type: 'Weapon',
      sub_type: ['Arrows (20)', 'Blowgun Needles (50)', 'Crossbow Bolts (20)',
        'Sling Bullets (20)'],
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ammunition',
      rarity: 'Rare',
      modifier: '2',
      type: 'Weapon',
      sub_type: ['Arrows (20)', 'Blowgun Needles (50)', 'Crossbow Bolts (20)',
        'Sling Bullets (20)'],
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ammunition',
      rarity: 'Very Rare',
      modifier: '3',
      type: 'Weapon',
      sub_type: ['Arrows (20)', 'Blowgun Needles (50)', 'Crossbow Bolts (20)',
        'Sling Bullets (20)'],
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Amulet of Health',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Amulet of Proof Against Detection and Location',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Amulet of the Planes',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '150',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Animated Shield',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '151',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Apparatus of Kwalish',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '151',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor',
      rarity: 'Rare',
      modifier: '1',
      type: 'Armor',
      sub_type: ['Padded', 'Leather', 'Studded Leather', 'Hide', 'Chain Shirt', 'Scale Mail',
        'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor',
      rarity: 'Very Rare',
      modifier: '2',
      type: 'Armor',
      sub_type: ['Padded', 'Leather', 'Studded Leather', 'Hide', 'Chain Shirt', 'Scale Mail',
        'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor',
      rarity: 'Legendary',
      modifier: '3',
      type: 'Armor',
      sub_type: ['Padded', 'Leather', 'Studded Leather', 'Hide', 'Chain Shirt', 'Scale Mail',
        'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor of Invulnerability',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor of Resistance',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: ['Padded', 'Leather', 'Studded Leather', 'Hide', 'Chain Shirt', 'Scale Mail',
        'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Armor of Vulnerability',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Arrow-Catching Shield',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    /* TODO:
      Will need to make a special roll table around this guy.
      Or when the monster table is done, I might be able to query for all types
      and roll on that list. This isn't perfect, but will work for now.
     */
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Arrow of Slaying',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Aberration', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental',
        'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze', 'Plant',
        'Swarm of Tiny Beasts', 'Undead'],
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bag of Beans',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '152',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bag of Devouring',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '153',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bag of Holding',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '153',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tan Bag of Tricks',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '154',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gray Bag of Tricks',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '154',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rust Bag of Tricks',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '154',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bead of Force',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '154',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Dwarvenkind',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Hill Giant Strength',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Fire Giant Strength',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Stone Giant Strength',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Frost Giant Strength',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Cloud Giant Strength',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Belt of Storm Giant Strength',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Berserker Axe',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Handaxe', 'Battleaxe', 'Greataxe'],
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Boots of Elvenkind',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Boots of Levitation',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Boots of Speed',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '155',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Boots of Striding and Springing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Boots of the Winterlands',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bowl of Commanding Water Elementals',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bracers of Archery',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bracers of Defense',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Brazier of Commanding Fire Elementals',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Brooch of Shielding',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Broom of Flying',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '156',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Candle of Invocation',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '157',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cap of Water Breathing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '157',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cape of the Mountebank',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '157',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Carpet of Flying',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '157',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Censer of Controlling Air Elementals',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Chime of Opening',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Circlet of Blasting',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of Arachnida',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of Displacement',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of Elvenkind',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of Invisibility',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '158',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of Protection',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of the Bat',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cloak of the Manta Ray',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Crystal Ball',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Crystal Ball of Mind Reading',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Crystal Ball of Telepathy',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Crystal Ball of True Seeing',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cube of Force',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '159',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cubic Gate',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '160',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Daern's Instant Fortress",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '160',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dagger of Venom',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '161',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dancing Sword',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '161',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Decanter of Endless Water',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '161',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Deck of Illusions',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '161',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Deck of Many Things',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '162',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Defender',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '164',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Demon Armor',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '165',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dimensional Shackles',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '165',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dragon Scale Mail',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '165',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dragon Slayer',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '166',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Driftglobe',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '166',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dust of Disappearance',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '166',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dust of Dryness',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '166',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dust of Sneezing and Choking',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '166',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dwarven Plate',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '167',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Dwarven Thrower',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '167',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Efreeti Bottle',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '167',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Efreeti Chain',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '167',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Elemental Gem',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '167',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Elixir of Health',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Elven Chain',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Eversmoking Bottle',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Eyes of Charming',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Eyes of Minute Seeing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Eyes of the Eagle',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '168',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    /*
      NOTE: Figurine of wondrous power must be separated, because they
      have different rarities. Specific figurine selection will have to
      be handled by the client.
    */
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bronze Griffon Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '169',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ebony Fly Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '169',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Golden Lions Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '169',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ivory Goats Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '169',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ivory Goats Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '169',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Marble Elephant Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Obsidian Steed Figurine of Wondrous Power',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Onyx Dog Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Serpentine Owl Figurine of Wondrous Power',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Silver Raven Figurine of Wondrous Power',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Flame Tongue',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Folding Boat',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '170',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Frost Brand',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '171',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gauntlets of Ogre Power',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '171',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gem of Brightness',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '171',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gem of Seeing',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Giant Slayer',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Handaxe', 'Battleaxe', 'Greataxe', 'Greatsword', 'Longsword',
        'Shortsword'],
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Glamoured Studded Leather',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gloves of Missile Snaring',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gloves of Swimming and Climbing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Gloves of Thievery',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Goggles of Night',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '172',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Hammer of Thunderbolts',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '173',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Hat of Disguise',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '173',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Headband of Intellect',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '173',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Helm of Brilliance',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '173',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Helm of Comprehending Languages',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '173',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Helm of Telepathy',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '174',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Helm of Teleportation',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '174',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Heward's Handy Haversack",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '174',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Holy Avenger',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '174',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Horn of Blasting',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '174',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Silver Horn of Valhalla',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Brass Horn of Valhalla',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Bronze Horn of Valhalla',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Iron Horn of Valhalla',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Horseshoes of a Zephyr',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Horseshoes of Speed',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Immovable Rod',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '175',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Anstruth Harp',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Canaith Mandolin',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Cli Lyre',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Doss Lute',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Fochlucan Bandore',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mac-Fuimidh Cittern',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ollamh Harp',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Absorption Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Agility Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Awareness Ioun Stone',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Fortitude Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Greater Absorption Ioun Stone',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Insight Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Intellect Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Leadership Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mastery Ioun Stone',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Protection Ioun Stone',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Regeneration Ioun Stone',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Reserve Ioun Stone',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Strength Ioun Stone',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sustenance Ioun Stone',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Iron Bands of Bilarro',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '176',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Iron Flask',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '178',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Javelin of Lightning',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '178',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Keoghtom's Ointment",
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '179',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Lantern of Revealing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '179',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Luck Blade',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '179',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mace of Disruption',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '179',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mace of Smiting',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '179',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mace of Terror',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '180',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mantle of Spell Resistance',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '180',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Manual of Bodily Health',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '180',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Manual of Gainful Exercise',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '180',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Manual of Golems',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '180',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Manual of Quickness of Action',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '181',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Mariner's Armor",
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Armor',
      sub_type: ['Padded', 'Leather', 'Studded Leather', 'Hide', 'Chain Shirt', 'Scale Mail',
        'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
      page: '181',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Medallion of Thoughts',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '181',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mirror of Life Trapping',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '181',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Mithral Armor',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Armor',
      sub_type: ['Chain Shirt', 'Scale Mail', 'Breastplate', 'Half Plate', 'Ring Mail',
        'Chain Mail', 'Splint', 'Plate'],
      page: '182',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Necklace of Adaptation',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '182',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Necklace of Fireballs',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '182',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Necklace of Prayer Beads',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '182',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Nine Lives Stealer',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '183',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Nolzur's Marvelous Pigments",
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '183',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Oathbow',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '183',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Oil of Etherealness',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '183',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Oil of Sharpness',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Oil of Slipperiness',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Pearl of Power',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Periapt of Health',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Periapt of Proof Against Poison',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Periapt of Wound Closure',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Philter of Love',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '184',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Pipes of Haunting',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '185',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Pipes of the Sewers',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '185',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Plate Armor of Etherealness',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '185',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Portable Hole',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '185',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Animal Friendship',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Clairvoyance',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Climbing',
      rarity: 'Common',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Diminution',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Fire Breath',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Flying',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Gaseous Form',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Hill Giant Strength',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Frost Giant Strength',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Stone Giant Strength',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Fire Giant Strength',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Cloud Giant Strength',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Storm Giant Strength',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Growth',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Healing',
      rarity: 'Common',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Greater Healing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Superior Healing',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Supreme Healing',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '187',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Heroism',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Invisibility',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Invulnerability',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Longevity',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Mind Reading',
      rarity: 'Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Poison',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Resistance',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Speed',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Vitality',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Potion of Water Breathing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Potion',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Anchor Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Bird Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Fan Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Swan Boat Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Tree Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: "Quaal's Whip Token",
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '188',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Quiver of Ehlonna',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '189',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Animal Influence',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '189',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Djinni Summoning',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '190',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Air Elemental Command',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '190',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Earth Elemental Command',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '190',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Fire Elemental Command',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '190',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Water Elemental Command',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '190',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Evasion',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Feather Falling',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Free Action',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Invisibility',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Jumping',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Mind Shielding',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Regeneration',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '191',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Resistance',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: ['Acid', 'Cold', 'Fire', 'Force', 'Lightning', 'Necrotic', 'Poison',
        'Psychic', 'Radiant', 'Thunder'],
      page: '192',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Shooting Stars',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '192',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Spell Storing',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '192',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Spell Turning',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Swimming',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Telekinesis',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of the Ram',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Three Wishes',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Warmth',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of Water Walking',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Ring of X-Ray Vision',
      rarity: 'Rare',
      modifier: '0',
      type: 'Ring',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Robe of Eyes',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '193',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Robe of Scintillating Colors',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '194',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Robe of Stars',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '194',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Robe of the Archmagi',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '194',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Robe of Useful Items',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '195',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Absorption',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '195',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Alertness',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '196',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Lordly Might',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '196',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of the Pact Keeper',
      rarity: 'Uncommon',
      modifier: '1',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of the Pact Keeper',
      rarity: 'Rare',
      modifier: '2',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of the Pact Keeper',
      rarity: 'Very Rare',
      modifier: '3',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Resurrection',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Rulership',
      rarity: 'Rare',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rod of Security',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rope of Climbing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Rope of Entanglement',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '197',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Saddle of the Cavalier',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scarab of Protection',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scimitar of Speed',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Aberrations Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Beasts Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Celestials Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Elementals Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Fey Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Fiends Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Plants Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Scroll of Undead Protection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Scroll',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sending Stones',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sentinel Shield',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '199',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Shield',
      rarity: 'Uncommon',
      modifier: '1',
      type: 'Armor',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Shield',
      rarity: 'Rare',
      modifier: '2',
      type: 'Armor',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Shield',
      rarity: 'Very Rare',
      modifier: '3',
      type: 'Armor',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Shield of Missile Attraction',
      rarity: 'Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Slippers of Spider Climbing',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sovereign Glue',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Common',
      modifier: '0',
      type: 'Scroll',
      sub_type: ['Acid Splash', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Druidcraft',
        'Eldritch Blast', 'Fire Bolt', 'Friends', 'Guidance', 'Light', 'Mage Hand', 'Mending',
        'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Produce Flame',
        'Ray of Frost', 'Resistance', 'Sacred Flame', 'Shillelagh', 'Shocking Grasp',
        'Spare the Dying', 'Thaumaturgy', 'Thorn Whip', 'True Strike', 'Vicious Mockery'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Common',
      modifier: '1',
      type: 'Scroll',
      sub_type: ['Alarm', 'Animal Friendship', 'Armor of Agathys', 'Arms of Hadar', 'Bane',
        'Bless', 'Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Command',
        'Compelling Duel', 'Comprehend Languages', 'Create or Destroy Water', 'Cure Wounds',
        'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Disguise Self',
        'Dissonant Whispers', 'Divine Favor', 'Ensnaring Strike', 'Entangle',
        'Expeditious Retreat', 'Faerie Fire', 'False Life', 'Feather Fall', 'Find Familiar',
        'Fog Cloud', 'Goodberry', 'Grease', 'Guiding Bolt', 'Hail of Thorns', 'Healing Word',
        'Hellish Rebuke', 'Heroism', 'Hex', "Hunter's Mark", 'Identify', 'Illusory Script',
        'Inflict Wounds', 'Jump', 'Longstrider', 'Mage Armor', 'Magic Missile',
        'Protection from Evil and Good', 'Purify Food and Drink', 'Ray of Sickness',
        'Sanctuary', 'Searing Smite', 'Shield', 'Shield of Faith', 'Silent Image', 'Sleep',
        'Speak with Animals', "Tasha's Hideous Laughter", "Tenser's Floating Disk",
        'Thunderwave', 'Unseen Servant', 'Witch Bolt', 'Wrathful Smite'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Uncommon',
      modifier: '2',
      type: 'Scroll',
      sub_type: ['Aid', 'Alter Self', 'Animal Messenger', 'Arcane Lock', 'Augury', 'Barkskin',
        'Beast Sense', 'Blindness/Deafness', 'Blur', 'Branding Smite', 'Calm Emotions',
        'Cloud of Daggers', 'Continual Flame', 'Cordon of Arrows', 'Crown of Madness',
        'Darkness', 'Darkvision', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce',
        'Enthrall', 'Find Steed', 'Find Traps', 'Flame Blade', 'Flaming Sphere',
        'Gentle Repose', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Invisibility',
        'Knock', 'Lesser Restoration', 'Levitate', 'Locate Animals or Plants', 'Locate Object',
        "Melf's Acid Arrow", 'Magic Mouth', 'Magic Weapon', 'Mirror Image', 'Misty Step',
        'Moonbeam', "Nystul's Magic Aura", 'Pass Without Trace', 'Phantasmal Force',
        'Prayer of Healing', 'Protection from Poison', 'Ray of Enfeeblement', 'Rope Trick',
        'Scorching Ray', 'See Invisibility', 'Shatter', 'Silence', 'Spider Climb',
        'Spike Growth', 'Spiritual Weapon', 'Suggestion', 'Warding Bond', 'Web',
        'Zone of Truth'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Uncommon',
      modifier: '3',
      type: 'Scroll',
      sub_type: ['Animate Dead', 'Aura of Vitality', 'Beacon of Hope', 'Bestow Curse',
        'Blinding Smite', 'Blink', 'Call Lightning', 'Clairvoyance', 'Conjure Animals',
        'Conjure Barrage', 'Counterspell', 'Create Food and Water', "Crusader's Mantle",
        'Daylight', 'Dispel Magic', 'Elemental Weapon', 'Erupting Earth', 'Fear',
        'Feign Death', 'Fireball', 'Flame Arrows', 'Fly', 'Gaseous Form',
        'Glyph of Warding', 'Haste', 'Hunger of Hadar', 'Hypnotic Pattern',
        "Leomund's Tiny Hut", 'Lightning Arrow', 'Magic Circle', 'Major Image',
        'Mass Healing Word', 'Meld into Stone', "Melf's Minute Meteors", 'Nondetection',
        'Phantom Steed', 'Plant Growth', 'Protection from Energy', 'Remove Curse', 'Revivify',
        'Sending', 'Sleet Storm', 'Slow', 'Speak with Dead', 'Speak with Plants',
        'Spirit Guardians', 'Stinking Cloud', 'Tidal Wave', 'Tongues', 'Vampiric Touch',
        'Wall of Sand', 'Wall of Water', 'Water Breathing', 'Water Walk', 'Wind Wall'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Rare',
      modifier: '4',
      type: 'Scroll',
      sub_type: ['Arcane Eye', 'Aura of Life', 'Aura of Purity', 'Banishment', 'Blight',
        'Compulsion', 'Confusion', 'Conjure Minor Elementals', 'Conjure Woodland Beings',
        'Control Water', 'Death Ward', 'Dimension Door', 'Divination', 'Dominate Beast',
        'Elemental Bane', "Evard's Black Tentacles", 'Fabricate', 'Fire Shield',
        'Freedom of Movement', 'Giant Insect', 'Grasping Vine', 'Greater Invisibility',
        'Guardian of Faith', 'Hallucinatory Terrain', 'Ice Storm', "Leomund's Secret Chest",
        'Locate Creature', "Mordenkainen's Faithful Hound", "Mordenkainen's Private Sanctum",
        "Otiluke's Resilient Sphere", 'Phantasmal Killer', 'Polymorph', 'Staggering Smite',
        'Stone Shape', 'Stoneskin', 'Storm Sphere', 'Vitriolic Sphere', 'Wall of Fire',
        'Watery Sphere'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Rare',
      modifier: '5',
      type: 'Scroll',
      sub_type: ['Animate Objects', 'Antilife Shell', 'Awaken', 'Banishing Smite',
        "Bigby's Hand", 'Circle of Power', 'Cloudkill', 'Commune', 'Commune with Nature',
        'Cone of Cold', 'Conjure Elemental', 'Conjure Volley', 'Contact Other Plane',
        'Contagion', 'Control Winds', 'Creation', 'Destructive Wave', 'Dispel Evil and Good',
        'Dominate Person', 'Dream', 'Flame Strike', 'Geas', 'Greater Restoration', 'Hallow',
        'Hold Monster', 'Immolation', 'Insect Plague', 'Legend Lore', 'Maelstrom',
        'Mass Cure Wounds', 'Mislead', 'Modify Memory', 'Passwall', 'Planar Binding',
        'Raise Dead', "Rary's Telepathic Bond", 'Reincarnate', 'Scrying', 'Seeming',
        'Swift Quiver', 'Telekinesis', 'Teleportation Circle', 'Transmute Rock', 'Tree Stride',
        'Wall of Force', 'Wall of Stone'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Very Rare',
      modifier: '6',
      type: 'Scroll',
      sub_type: ['Arcane Gate', 'Blade Barrier', 'Bones of the Earth', 'Chain Lightning',
        'Circle of Death', 'Conjure Fey', 'Contingency', 'Create Undead', 'Disintegrate',
        "Drawmij's Instant Summons", 'Eyebite', 'Find the Path', 'Flesh to Stone',
        'Forbiddance', 'Globe of Invulnerability', 'Guards and Wards', 'Harm', 'Heal',
        "Heroes' Feast", 'Investiture of Flame', 'Investiture of Ice',
        'Investiture of Stone', 'Investiture of Wind', 'Magic Jar', 'Mass Suggestion',
        'Move Earth', "Otiluke's Freezing Sphere", "Otto's Irresistible Dance", 'Planar Ally',
        'Primordial Ward', 'Programmed Illusion', 'Sunbeam', 'Transport via Plants',
        'True Seeing', 'Wall of Ice', 'Wall of Thorns', 'Wind Walk', 'Word of Recall'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Very Rare',
      modifier: '7',
      type: 'Scroll',
      sub_type: ['Conjure Celestial', 'Delayed Blast Fireball', 'Divine Word',
        'Etherealness', 'Finger of Death', 'Fire Storm', 'Forcecage', 'Mirage Arcane',
        "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", 'Plane Shift',
        'Prismatic Spray', 'Project Image', 'Regenerate', 'Resurrection',
        'Reverse Gravity', 'Sequester', 'Simulacrum', 'Symbol', 'Teleport', 'Whirlwind'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Very Rare',
      modifier: '8',
      type: 'Scroll',
      sub_type: ["Abi-Dalzim's Horrid Wilting", 'Animal Shapes', 'Antimagic Field',
        'Antipathy/Sympathy', 'Clone', 'Control Weather', 'Demiplane', 'Dominate Monster',
        'Earthquake', 'Feeblemind', 'Glibness', 'Holy Aura', 'Incendiary Cloud', 'Maze',
        'Mind Blank', 'Power Word Stun', 'Sunburst', 'Telepathy', 'Tsunami'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spell Scroll',
      rarity: 'Legendary',
      modifier: '9',
      type: 'Scroll',
      sub_type: ['Astral Projection', 'Foresight', 'Gate', 'Imprisonment', 'Mass Heal',
        'Meteor Swarm', 'Power Word Heal', 'Power Word Kill', 'Prismatic Wall',
        'Shapechange', 'Storm of Vengeance', 'Time Stop', 'True Polymorph',
        'True Resurrection', 'Weird', 'Wish'],
      page: '200',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Spellguard Shield',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Armor',
      sub_type: '{}',
      page: '201',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sphere of Annihilation',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '201',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Charming',
      rarity: 'Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '201',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Fire',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '201',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Frost',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '202',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Healing',
      rarity: 'Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '202',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Power',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '202',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Striking',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '203',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Swarming Insects',
      rarity: 'Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '203',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of the Adder',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '203',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of the Magi',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '203',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of the Python',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '204',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of the Woodlands',
      rarity: 'Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '204',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Thunder and Lightning',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '204',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Staff of Withering',
      rarity: 'Rare',
      modifier: '0',
      type: 'Staff',
      sub_type: '{}',
      page: '205',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Stone of Controlling Earth Elementals',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '205',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Stone of Good Luck',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '205',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sun Blade',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '205',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sword of Answering',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Answerer', 'Back Talker', 'Concluder', 'Last Quip', 'Rebutter', 'Replier',
        'Retorter', 'Scather', 'Squelcher'],
      page: '206',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sword of Life Stealing',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '206',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sword of Sharpness',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Shortsword', 'Scimitar'],
      page: '206',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sword of Vengeance',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '206',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Sword of Wounding',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Rapier', 'Scimitar', 'Shortsword'],
      page: '207',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Talisman of Pure Good',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '207',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Talisman of the Sphere',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '207',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Talisman of Ultimate Evil',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '207',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tentacle Rod',
      rarity: 'Rare',
      modifier: '0',
      type: 'Rod',
      sub_type: '{}',
      page: '208',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tome of Clear Thought',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '208',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tome of Leadership and Influence',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '208',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tome of the Stilled Tongue',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '208',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Tome of Understanding',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Trident of Fish Command',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Weapon',
      sub_type: '{}',
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Universal Solvent',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Vicious Weapon',
      rarity: 'Rare',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer',
        'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart',
        'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe',
        'Greatsword', 'Halberd', 'Lance', ' Longsword', 'Maul', 'Morningstart', 'Pike',
        'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip',
        'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'],
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Vorpal Sword',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Greatsword', 'Longsword', 'Shortsword'],
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Binding',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '209',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Enemy Detection',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '210',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Fear',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '210',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Fireballs',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '210',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Lightning Bolts',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Magic Detection',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Magic Missiles',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Paralysis',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Polymorph',
      rarity: 'Very Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Secrets',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '211',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of the War Mage',
      rarity: 'Uncommon',
      modifier: '1',
      type: 'Wand',
      sub_type: '{}',
      page: '212',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of the War Mage',
      rarity: 'Rare',
      modifier: '2',
      type: 'Wand',
      sub_type: '{}',
      page: '212',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of the War Mage',
      rarity: 'Very Rare',
      modifier: '3',
      type: 'Wand',
      sub_type: '{}',
      page: '212',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Web',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '212',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wand of Wonder',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wand',
      sub_type: '{}',
      page: '212',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Weapon',
      rarity: 'Uncommon',
      modifier: '1',
      type: 'Weapon',
      sub_type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer',
        'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart',
        'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe',
        'Greatsword', 'Halberd', 'Lance', ' Longsword', 'Maul', 'Morningstart', 'Pike',
        'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip',
        'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'],
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Weapon',
      rarity: 'Rare',
      modifier: '2',
      type: 'Weapon',
      sub_type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer',
        'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart',
        'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe',
        'Greatsword', 'Halberd', 'Lance', ' Longsword', 'Maul', 'Morningstart', 'Pike',
        'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip',
        'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'],
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Weapon',
      rarity: 'Very Rare',
      modifier: '3',
      type: 'Weapon',
      sub_type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer',
        'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart',
        'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe',
        'Greatsword', 'Halberd', 'Lance', ' Longsword', 'Maul', 'Morningstart', 'Pike',
        'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip',
        'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'],
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Weapon of Warning',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Weapon',
      sub_type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer',
        'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart',
        'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe',
        'Greatsword', 'Halberd', 'Lance', ' Longsword', 'Maul', 'Morningstart', 'Pike',
        'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip',
        'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'],
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Well of Many Worlds',
      rarity: 'Legendary',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wind Fan',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '213',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Winged Boots',
      rarity: 'Uncommon',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '214',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    magic_item_list.push({
      id: UUID.v4(),
      name: 'Wings of Flying',
      rarity: 'Rare',
      modifier: '0',
      type: 'Wondrous Item',
      sub_type: '{}',
      page: '214',
      created_at: Sequelize.fn('now'),
      updated_at: Sequelize.fn('now')
    })
    return queryInterface.bulkInsert('magic_items', magic_item_list, {}).then(() => {
      console.log('seed-magic_items completed')
    })
  },
  down: function (queryInterface, Sequelize) {}
}
