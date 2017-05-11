'use strict'
const Logger = require('winston')

exports.home = (req, res, next) => {
  Logger.log('info', '+ mainController.home')
  Logger.log('info', '- mainController.home')
  res.render('main', {})
}
