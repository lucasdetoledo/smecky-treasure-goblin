'use strict'
const AppRoot = require('app-root-path')
const Logger = require('winston')
const Models = require(`${AppRoot}/app/models`)
const Dicebag = require('smecky-dicebag')
const MagicItem = Models.magic_item

exports.get = (req, res, next) => {
  Logger.log('info', '+ magicItemController.get')
  let where_map = {}
  if (req.query.name) {
    where_map.name = req.query.name
  }
  if (req.query.rarity) {
    where_map.rarity = req.query.rarity
  }
  if (req.query.modifier) {
    where_map.modifier = req.query.modifier
  }
  if (req.query.type) {
    where_map.type = req.query.type
  }
  if (req.query.sub_type) {
    where_map.sub_type = {
      $contains: [req.query.sub_type]
    }
  }
  return MagicItem.findOne({
    attributes: ['name', 'rarity', 'modifier', 'type', 'sub_type', 'page'],
    where: where_map
  }).then((magic_item_data) => {
    Logger.log('info', '- magicItemController.get')
    if (!magic_item_data) {
      return res.status(500).json('no item found with given parameters')
    }
    let sub_type_list = magic_item_data.dataValues.sub_type
    if (sub_type_list && sub_type_list.length > 0) {
      if (req.query.sub_type) {
        magic_item_data.dataValues.sub_type = req.query.sub_type
      } else {
        /*
          TODO: Fix a bug here when there is only 1 value in sub_type
         */
        magic_item_data.dataValues.sub_type =
          magic_item_data.dataValues.sub_type[Dicebag.roll(sub_type_list.length - 1, 1)]
      }
    } else {
      magic_item_data.dataValues.sub_type = null
    }
    return res.status(200).json(magic_item_data)
  }).catch((error) => {
    Logger.log('error', `- magicItemController : ${error}`)
    return res.status(500).json('an unexpected error occurred')
  })
}
