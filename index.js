'use strict'
const AppRoot = require('app-root-path')
const Express = require('Express')
const BodyParser = require('body-parser')
const App = Express()

App.set('views', `${AppRoot}/views`)
App.set('view engine', 'pug')
App.use(BodyParser.json())
App.use(Express.static(`${AppRoot}/public`))

let mainRouter = require(`${AppRoot}/app/routes/mainRouter`)
let hoardRouter = require(`${AppRoot}/app/routes/hoardRouter`)

App.use('/', mainRouter)
App.use('/hoard', hoardRouter)

App.listen(process.env.APP_PORT, () => {
  console.log(`smecky-hoarder listening on port ${process.env.APP_PORT}`)
})
