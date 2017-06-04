'use strict'
/* global $, dataManager, stateManager */
var modalModule = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    html: null
  }

  var stateMap = {
    modal_width: null
  }

  var jqueryMap = {}

  var config, init, set_jquery_map, extend, retractRollLogAsync, extendRollLogAsync,
    toggleRollLogAsync
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  set_jquery_map = function () {
    var $container = stateMap.$container
    jqueryMap = {
      $container: $container,
      $roll_log_modal: $container.find('#roll-log-modal')
    }
  }
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Event Handlers
  // ----------------------------------------------------------------------------------End

  // -----------------------------------------------------------------------Public Methods
  toggleRollLogAsync = function () {
    if (jqueryMap.$roll_log_modal && jqueryMap.$roll_log_modal.width() > 0) {
      console.log('foo')
      return retractRollLogAsync()
    } else {
      console.log('bar')
      return extendRollLogAsync()
    }
  }

  extendRollLogAsync = function () {
    let currentlyExtended = stateManager.get('currentlyExtended')
    if ((!currentlyExtended || currentlyExtended === 'roll_log_modal') && !stateManager.get('isAnimating')) {
      stateManager.set('isAnimating', true)
      return new Promise(function (resolve, reject) {
        let roll_log = dataManager.get('roll_log')
        if (roll_log && roll_log.length > 0) {
          jqueryMap.$container.empty()
          jqueryMap.$container.css('visibility', 'visible')
          jqueryMap.$container.append('<div id="roll-log-modal"></div>')
          jqueryMap.$container.animate({ width: '100vw' }, 600, function () {
            let roll_log_modal = $('#roll-log-modal')
            for (let i = 0; i < roll_log.length; ++i) {
              roll_log_modal.append('<div>' + roll_log[i] + '</div>')
            }
            set_jquery_map()
          })
        }
        stateManager.set('isAnimating', false)
        stateManager.set('currentlyExtended', 'roll_log_modal')
        return resolve()
      })
    }
    return Promise.resolve()
  }

  retractRollLogAsync = function () {
    return new Promise(function (resolve, reject) {
      jqueryMap.$container.animate({ width: '0' }, 300, function () {
        jqueryMap.$container.css('visibility', 'hidden')
        jqueryMap.$container.empty()
        set_jquery_map()
        stateMap.current_modal = null
        stateManager.set('currentlyExtended', null)
        resolve(true)
      })
    })
  }

  config = function (input_map) {

  }

  init = function (input_map) {
    stateMap.$container = input_map.$container
    input_map.$container.append(configMap[configMap.starting_modal])
    set_jquery_map()
    stateMap.modal_width = jqueryMap.$container.width()
  }
  // ----------------------------------------------------------------------------------end

  return {
    config: config,
    init: init,
    extend: extend,
    toggleRollLogAsync: toggleRollLogAsync
  }
}())
