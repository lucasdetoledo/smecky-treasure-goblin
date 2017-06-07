'use strict'
const AppRoot = require('app-root-path')
const Express = require('express')
const Router = Express.Router()
const GemstoneController = require(`${AppRoot}/app/controllers/gemstoneController`)

Router.get('/', GemstoneController.get)

module.exports = Router
