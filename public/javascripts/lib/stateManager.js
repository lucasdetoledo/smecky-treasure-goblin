'use strict'
/* global */
var stateManager = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var stateMap = {
    isAnimating: null,
    currentlyExtended: null,
    level: null,
    type: null
  }
  var config, get, set
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  get = function (val) {
    return stateMap[val]
  }

  set = function (key, val) {
    if (val === 'toggle') {
      stateMap[key] = !stateMap[key]
    } else {
      stateMap[key] = val
    }
  }

  config = function (input_map) {
    stateMap.isAnimating = input_map.isAnimating
    stateMap.currentlyExtended = input_map.isExtended
  }
  // ----------------------------------------------------------------------------------end

  return {
    config: config,
    get: get,
    set: set
  }
}())

