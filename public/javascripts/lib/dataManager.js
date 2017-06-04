'use strict'
/* global */
var dataManager = (function () { // eslint-disable-line no-unused-vars
  // -----------------------------------------------------Module Scope Variables
  var stateMap = {}
  var config, init, get, set
  // ------------------------------------------------------------------------end

  // ------------------------------------------------------------Private Methods
  // ------------------------------------------------------------------------end

  // -------------------------------------------------------------Public Methods
  get = function (val) {
    return stateMap[val]
  }

  set = function (key, val) {
    stateMap[key] = val
  }

  init = function (input_map) {}
  // ------------------------------------------------------------------------end

  return {
    config: config,
    init: init,
    get: get,
    set: set
  }
}())

