'use strict'
/* global $, Promise, dataManager */
var apiManager = (function () { // eslint-disable-line no-unused-vars
  // ---------------------------------------------------------------Module Scope Variables
  var configMap = {
    horde_url: null
  }
  var config, getHorde
  // ----------------------------------------------------------------------------------end

  // ----------------------------------------------------------------------Private Methods
  // ----------------------------------------------------------------------------------end

  // -----------------------------------------------------------------------Public Methods
  getHorde = function (level) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: configMap.horde_url + '?level=' + level,
        type: 'get'
      }).then(function (payload) {
        dataManager.set('loot_list', payload.loot_list)
        dataManager.set('roll_log', payload.log)
        resolve(true)
      }).catch(function (error) {
        reject(Error(error.responseJSON))
      })
    })
  }

  config = function (input_map) {
    configMap.horde_url = input_map.horde_url
  }
  // ----------------------------------------------------------------------------------end

  return {
    config: config,
    getHorde: getHorde
  }
}())

