'use strict'
const AppRoot = require('app-root-path')
const FS = require('fs')
const Path = require('path')
const Sequelize = require('sequelize')
const Env = process.env.NODE_ENV || 'development'
const Config = require(`${AppRoot}/app/config/dbConfig`)[Env]
const Basename = Path.basename(module.filename)
const db_map = {}
let sequelize = new Sequelize(Config.url, { dialectOptions: { ssl: (Config.ssl === 'true') } })
FS
  .readdirSync(__dirname)
  .filter(function (file_str) {
    return (file_str.indexOf('.') !== 0) && (file_str !== Basename) && (file_str.slice(-3) === '.js')
  })
  .forEach(function (file_str) {
    let model = sequelize['import'](Path.join(__dirname, file_str))
    db_map[model.name] = model
  })

Object.keys(db_map).forEach(function (model_name_str) {
  if (db_map[model_name_str].associate) {
    db_map[model_name_str].associate(db_map)
  }
})
db_map.sequelize = sequelize
db_map.Sequelize = Sequelize
module.exports = db_map

