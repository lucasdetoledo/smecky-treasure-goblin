'use strict'
const AppRoot = require('app-root-path')
const Promise = require('bluebird')
const HoardHelper = require(`${AppRoot}/app/utils/hoardHelper`)()
const Dicebag = require('smecky-dicebag')

module.exports = () => {
  let rollCoins, rollLoot, roll

  rollCoins = (loot_map, roll_log) => {
    let cp_roll, sp_roll, gp_roll, pp_roll

    cp_roll = Dicebag.d6(2, { verbose: true })
    loot_map.coins.cp = cp_roll.sum * 100
    roll_log.coins.cp = { dice: '2d6', rolls: cp_roll.roll_log }

    sp_roll = Dicebag.d6(2, { verbose: true })
    loot_map.coins.sp = sp_roll.sum * 1000
    roll_log.coins.sp = { dice: '2d6', rolls: sp_roll.roll_log }

    gp_roll = Dicebag.d6(6, { verbose: true })
    loot_map.coins.gp = gp_roll.sum * 100
    roll_log.coins.gp = { dice: '6d6', rolls: gp_roll.roll_log }

    pp_roll = Dicebag.d6(3, { verbose: true })
    loot_map.coins.pp = gp_roll.sum * 10
    roll_log.coins.pp = { dice: '3d6', rolls: pp_roll.roll_log }
  }

  rollLoot = (loot_map, roll_log) => {
    let table_roll, gemstone_promise_list, art_object_promise_list, magic_item_promise_list

    table_roll = Dicebag.roll(100, 1, { verbose: true })
    roll_log.hoard_table = { name: 'Treasure Hoard Challenge 5 - 10', dice: '1d100', rolls: table_roll.roll_log }

    gemstone_promise_list = []
    art_object_promise_list = []
    magic_item_promise_list = []

    if (table_roll.sum < 5) {
      // Do nothing
    } else if (table_roll.sum < 11) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
    } else if (table_roll.sum < 17) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
    } else if (table_roll.sum < 23) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
    } else if (table_roll.sum < 29) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
    } else if (table_roll.sum < 33) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 37) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 41) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 45) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(6, 1, 'a', roll_log)
    } else if (table_roll.sum < 50) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 55) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 60) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 64) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'b', roll_log)
    } else if (table_roll.sum < 67) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 70) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 73) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 75) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'c', roll_log)
    } else if (table_roll.sum < 77) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'd', roll_log)
    } else if (table_roll.sum < 79) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'd', roll_log)
    } else if (table_roll.sum < 80) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'd', roll_log)
    } else if (table_roll.sum < 81) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(1, 1, 'd', roll_log)
    } else if (table_roll.sum < 85) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '25', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 89) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '50', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 92) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 95) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'f', roll_log)
    } else if (table_roll.sum < 97) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 99) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'g', roll_log)
    } else if (table_roll.sum < 100) {
      gemstone_promise_list = HoardHelper.buildGemstonePromises(6, 3, '100', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
    } else if (table_roll.sum < 101) {
      art_object_promise_list = HoardHelper.buildArtObjectPromises(4, 2, '250', roll_log)
      magic_item_promise_list = HoardHelper.buildMagicItemPromises(4, 1, 'h', roll_log)
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
      artobjects: null,
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