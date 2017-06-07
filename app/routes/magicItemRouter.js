'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const Router = Express.Router()
const magicItemController = require(`${AppRoot}/app/controllers/magicItemController`)

Router.get('/', magicItemController.get)

module.exports = Router
