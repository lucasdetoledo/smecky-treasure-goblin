'use strict'

const AppRoot = require('app-root-path')
const Dicebag = require('smecky-dicebag')
const RequestPromise = require('request-promise')
const MagicItemHelper = require(`${AppRoot}/app/utils/magicItemHelper`)()
const TableA = require(`${AppRoot}/app/magicItemTables/a`)()
const TableB = require(`${AppRoot}/app/magicItemTables/b`)()
const TableC = require(`${AppRoot}/app/magicItemTables/c`)()
const TableD = require(`${AppRoot}/app/magicItemTables/d`)()
const TableE = require(`${AppRoot}/app/magicItemTables/e`)()
const TableF = require(`${AppRoot}/app/magicItemTables/f`)()
const TableG = require(`${AppRoot}/app/magicItemTables/g`)()
const TableH = require(`${AppRoot}/app/magicItemTables/h`)()
const TableI = require(`${AppRoot}/app/magicItemTables/i`)()

module.exports = () => {
  let buildGemstonePromises, buildArtObjectPromises, buildMagicItemPromises

  buildGemstonePromises = (die_type, die_count, value, roll_log) => {
    let r, p

    r = Dicebag.roll(die_type, die_count, { verbose: true })
    p = []

    roll_log.gemstones = { dice: `${die_count}d${die_type}`, rolls: r.roll_log }
    for (let i = 0; i < r.sum; ++i) {
      p.push(RequestPromise.get(MagicItemHelper.formatGet(`gemstones?value=${value}`)))
    }
    return p
  }

  buildArtObjectPromises = (die_type, die_count, value, roll_log) => {
    let r, p

    r = Dicebag.roll(die_type, die_count, { verbose: true })
    p = []

    roll_log.artobjects = { dice: `${die_count}d${die_type}`, rolls: r.roll_log }
    for (let i = 0; i < r.sum; ++i) {
      p.push(RequestPromise.get(MagicItemHelper.formatGet(`artobjects?value=${value}`)))
    }
    return p
  }

  buildMagicItemPromises = (die_type, die_count, table, roll_log) => {
    let r, p

    r = Dicebag.roll(die_type, die_count, { verbose: true })
    p = []

    let magic_item_table_log = {
      name: `Table ${table.toUpperCase()}`,
      dice: `${die_count}d${die_type}`,
      rolls: r.roll_log,
      magic_items: []
    }

    for (let i = 0; i < r.sum; ++i) {
      switch (table) {
        case 'a':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableA.roll(magic_item_table_log.magic_items))))
          break
        case 'b':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableB.roll(magic_item_table_log.magic_items))))
          break
        case 'c':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableC.roll(magic_item_table_log.magic_items))))
          break
        case 'd':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableD.roll(magic_item_table_log.magic_items))))
          break
        case 'e':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableE.roll(magic_item_table_log.magic_items))))
          break
        case 'f':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableF.roll(magic_item_table_log.magic_items))))
          break
        case 'g':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableG.roll(magic_item_table_log.magic_items))))
          break
        case 'h':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableH.roll(magic_item_table_log.magic_items))))
          break
        case 'i':
          p.push(RequestPromise.get(MagicItemHelper.formatGet(TableI.roll(magic_item_table_log.magic_items))))
          break
      }
    }

    roll_log.magic_item_tables.push(magic_item_table_log)
    return p
  }

  return {
    buildGemstonePromises: buildGemstonePromises,
    buildArtObjectPromises: buildArtObjectPromises,
    buildMagicItemPromises: buildMagicItemPromises
  }
}
