'use strict'
/* global */
var dataManager = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var stateMap = {
    loot_list: null,
    roll_log: null
  }
  var get, set
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  get = function (val) {
    return stateMap[val]
  }

  set = function (key, val) {
    stateMap[key] = val
  }
  // ----------------------------------------------------------------------------------end

  return {
    get: get,
    set: set
  }
}())

