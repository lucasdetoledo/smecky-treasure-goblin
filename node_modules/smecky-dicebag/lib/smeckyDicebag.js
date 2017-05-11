'use strict'
const _ = require('lodash')

module.exports = () => {
  let validate, roll, d4, d6, d8, d10, d12, d20

  validate = (die_type, die_count) => {
    if (!_.isInteger(die_type) || !_.isInteger(die_count)) {
      return Error('die_type and die_count must be integers')
    }
    if (die_type < 1 || die_count < 1) {
      return Error('die_type and die_count must be greater than 0')
    }
    if (die_type < Number.MIN_SAFE_INTEGER ||
      die_type > Number.MAX_SAFE_INTEGER ||
      die_count < Number.MIN_SAFE_INTEGER ||
      die_count > Number.MAX_SAFE_INTEGER) {
      return Error('die_type and die_count must be greater ' +
        'than MIN_SAFE_INTEGER and less than MAX_SAFE_INTEGER')
    }
    return false
  }

  roll = (die_type, die_count, options_map) => {
    let validation_error = validate(die_type, die_count)
    if (validation_error) {
      return validation_error
    }
    let roll_list = []

    for (let i = 0; i < die_count; ++i) {
      roll_list.push(_.random(1, die_type))
    }
    return _.sum(roll_list)
  }

  d4 = (die_count, options_map) => {
    return roll(4, die_count, options_map)
  }

  d6 = (die_count, options_map) => {
    return roll(6, die_count, options_map)
  }

  d8 = (die_count, options_map) => {
    return roll(8, die_count, options_map)
  }

  d10 = (die_count, options_map) => {
    return roll(10, die_count, options_map)
  }

  d12 = (die_count, options_map) => {
    return roll(12, die_count, options_map)
  }

  d20 = (die_count, options_map) => {
    return roll(20, die_count, options_map)
  }

  return {
    roll: roll,
    d4: d4,
    d6: d6,
    d8: d8,
    d10: d10,
    d12: d12,
    d20: d20
  }
}
