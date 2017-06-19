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

    if (table_roll.sum < 3) {
      // Do nothing
    } else if (table_roll.sum < 6) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(8, 1, 'c', roll_log))
    } else if (table_roll.sum < 9) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(8, 1, 'c', roll_log))
    } else if (table_roll.sum < 12) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(8, 1, 'c', roll_log))
    } else if (table_roll.sum < 15) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(8, 1, 'c', roll_log))
    } else if (table_roll.sum < 23) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'd', roll_log))
    } else if (table_roll.sum < 31) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'd', roll_log))
    } else if (table_roll.sum < 39) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'd', roll_log))
    } else if (table_roll.sum < 47) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'd', roll_log))
    } else if (table_roll.sum < 53) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'e', roll_log))
    } else if (table_roll.sum < 59) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'e', roll_log))
    } else if (table_roll.sum < 64) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'e', roll_log))
    } else if (table_roll.sum < 69) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(6, 1, 'e', roll_log))
    } else if (table_roll.sum < 70) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log))
    } else if (table_roll.sum < 71) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log))
    } else if (table_roll.sum < 72) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log))
    } else if (table_roll.sum < 73) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log))
    } else if (table_roll.sum < 75) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log))
    } else if (table_roll.sum < 77) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log))
    } else if (table_roll.sum < 79) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log))
    } else if (table_roll.sum < 81) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log))
    } else if (table_roll.sum < 86) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '1000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'i', roll_log))
    } else if (table_roll.sum < 91) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(10, 1, '2500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'i', roll_log))
    } else if (table_roll.sum < 96) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 1, '7500', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'i', roll_log))
    } else if (table_roll.sum < 101) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(8, 1, '5000', roll_log)
      magic_item_promise_list.concat(HoardHelper.buildMagicItemPromises(4, 1, 'i', roll_log))
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
