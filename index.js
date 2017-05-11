'use strict'
const AppRoot = require('app-root-path')
const Express = require('Express')
const BodyParser = require('body-parser')
const App = Express()

App.set('views', `${AppRoot}/views`)
App.set('view engine', 'pug')
App.use(BodyParser.json())
App.use(Express.static(`${AppRoot}/public`))

// let armorRouter = require(`${AppRoot}/app/routes/armorRouter)
let mainRouter = require(`${AppRoot}/app/routes/mainRouter`)

// App.use('/armor', armorRouter)
App.use('/', mainRouter)

App.listen(3000)
