'use strict'
/* global PubSub, apiManager, dataManager, headModule, bodyModule, footModule,
  rollLogModalModule, stateManager */
var shellModule = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: String() +
    '<div id="goblin-head"></div>' +
    '<div id="goblin-body"></div>' +
    '<div id="goblin-foot"></div>' +
    '<div id="goblin-modal" style="visibility:hidden"></div>'
  }
  var stateMap = {
    $container: null
  }
  var jqueryMap = {
    $container: null,
    $head: null,
    $body: null,
    $foot: null,
    $modal: null
  }
  var config, init, set_jquery_map, foot_submit_sub, foot_log_sub, validate_submit_button_sub
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $head: $container.find('#goblin-head'),
      $body: $container.find('#goblin-body'),
      $foot: $container.find('#goblin-foot'),
      $modal: $container.find('#goblin-modal')
    }
  }
  // ----------------------------------------------------------------------------------end

  // -------------------------------------------------------------------------------PubSub
  foot_submit_sub = function (name, data) {
    bodyModule.resetDropdownErrorColor()
    if (!data.type) {
      bodyModule.setDropdownErrorColor('type')
    }
    if (!data.level) {
      bodyModule.setDropdownErrorColor('level')
    }
    if (!data.type || !data.level) {
      return
    }
    apiManager.getHorde(stateManager.get('level')).then(function (horde_data) {
      bodyModule.setLootList(dataManager.get('loot_list'))
    })
  }

  foot_log_sub = function () {
    rollLogModalModule.toggleRollLogAsync().then(() => {
    })
  }

  validate_submit_button_sub = function () {
    if (stateManager.get('type') && stateManager.get('level')) {
      footModule.resetSubmitButtonErrorColor()
    }
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  config = function (input_map) {
  }

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.html(configMap.html)
    set_jquery_map()
    stateManager.config({ isAnimating: false, currentlyExtended: null })
    apiManager.config({
      horde_url: 'http://localhost:3612/hoard'
    })
    PubSub.subscribe('foot_submit_click', foot_submit_sub)
    PubSub.subscribe('foot_log_click', foot_log_sub)
    PubSub.subscribe('validate_submit_button', validate_submit_button_sub)
    headModule.config({ title: 'Treasure Goblin' })
    headModule.init({ $container: jqueryMap.$head })
    bodyModule.config()
    bodyModule.init({ $container: jqueryMap.$body })
    footModule.config()
    footModule.init({ $container: jqueryMap.$foot })
    rollLogModalModule.config()
    rollLogModalModule.init({ $container: jqueryMap.$modal })
  }
  // ----------------------------------------------------------------------------------end
  return {
    config: config,
    init: init
  }
}())
