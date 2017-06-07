'use strict'
const ValueList = ['25', '250', '750', '2500', '7500']

exports.get = (req) => {
  let validation_errors = []
  if (!req.query.value) {
    validation_errors.push('value must be included in query string')
    return validation_errors
  }
  if (ValueList.indexOf(req.query.value) === -1) {
    validation_errors.push('value must be one of the following values: 25, 250, 750, ' +
      '2500, 7500')
  }
  return validation_errors
}
