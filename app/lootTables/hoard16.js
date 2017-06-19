'use strict'
const AppRoot = require('app-root-path')
const Promise = require('bluebird')
const HoardHelper = require(`${AppRoot}/app/utils/hoardHelper`)()
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let rollCoins, rollLoot, roll

  rollCoins = (loot_map, roll_log) => {
    let gp_roll, pp_roll

    gp_roll = Dicebag.d6(4, { verbose: true })
    loot_map.coins.gp = gp_roll.sum * 1000
    roll_log.coins.gp = { dice: '4d6', rolls: gp_roll.roll_log }

    pp_roll = Dicebag.d6(5, { verbose: true })
    loot_map.coins.pp = gp_roll.sum * 100
    roll_log.coins.pp = { dice: '5d6', rolls: pp_roll.roll_log }
  }

  rollLoot = (loot_map, roll_log) => {
    let table_roll, gemstone_promise_list, art_object_promise_list, magic_item_promise_list

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.hoard_table = { name: 'Treasure Hoard Challenge 11 - 16', dice: '1d100', rolls: table_roll.roll_log }

    gemstone_promise_list = []
    art_object_promise_list = []
    magic_item_promise_list = []

    if (table_roll.sum < 4) {
      // Do nothing
    } else if (table_roll.sum < 7) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
    } else if (table_roll.sum < 10) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
    } else if (table_roll.sum < 13) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
    } else if (table_roll.sum < 16) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
    } else if (table_roll.sum < 20) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'a', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'b', roll_log)
    } else if (table_roll.sum < 24) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'a', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'b', roll_log)
    } else if (table_roll.sum < 27) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'a', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'b', roll_log)
    } else if (table_roll.sum < 30) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'a', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'b', roll_log)
    } else if (table_roll.sum < 36) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'c', roll_log)
    } else if (table_roll.sum < 41) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'c', roll_log)
    } else if (table_roll.sum < 46) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'c', roll_log)
    } else if (table_roll.sum < 51) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'c', roll_log)
    } else if (table_roll.sum < 55) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'd', roll_log)
    } else if (table_roll.sum < 59) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'd', roll_log)
    } else if (table_roll.sum < 63) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'd', roll_log)
    } else if (table_roll.sum < 67) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'd', roll_log)
    } else if (table_roll.sum < 69) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'e', roll_log)
    } else if (table_roll.sum < 71) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'e', roll_log)
    } else if (table_roll.sum < 73) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'e', roll_log)
    } else if (table_roll.sum < 75) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'e', roll_log)
    } else if (table_roll.sum < 77) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'f', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 79) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'f', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 81) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'f', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 83) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'f', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 86) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
    } else if (table_roll.sum < 89) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
    } else if (table_roll.sum < 91) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
    } else if (table_roll.sum < 93) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
    } else if (table_roll.sum < 95) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'i', roll_log)
    } else if (table_roll.sum < 97) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '750', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'i', roll_log)
    } else if (table_roll.sum < 99) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '500', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'i', roll_log)
    } else if (table_roll.sum < 101) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'i', roll_log)
    } else {
      throw Error('- hoard04.js : table_roll out of range.')
    }

    return Promise.all([gemstone_promise_list, art_object_promise_list,
      magic_item_promise_list].map(inner_promise => Promise.all(inner_promise)))
      .spread((gemstone_data, art_object_data, magic_item_data) => {
        loot_map.gemstones = gemstone_data
        loot_map.art_objects = art_object_data
        loot_map.magic_items = magic_item_data
      }).catch((e) => {
        console.log(e)
      })
  }

  roll = () => {
    let loot_map, roll_log
    loot_map = {
      coins: {
        cp: null,
        sp: null,
        ep: null,
        gp: null,
        pp: null
      },
      gemstones: [],
      art_objects: [],
      magic_items: []
    }
    roll_log = {
      coins: {
        cp: null,
        sp: null,
        ep: null,
        gp: null,
        pp: null
      },
      gemstones: null,
      art_objects: null,
      hoard_table: null,
      magic_item_tables: []
    }

    rollCoins(loot_map, roll_log)
    return rollLoot(loot_map, roll_log).then(() => {
      return {
        loot_list: loot_map,
        log: roll_log
      }
    }).catch((e) => {
      console.log(e)
    })
  }

  return {
    roll: roll
  }
}
