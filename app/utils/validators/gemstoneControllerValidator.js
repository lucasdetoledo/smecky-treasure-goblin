'use strict'
const ValueList = ['10', '50', '100', '500', '1000', '5000']

exports.get = (req) => {
  let validation_errors = []
  if (!req.query.value) {
    validation_errors.push('value must be included in query string')
    return validation_errors
  }
  if (ValueList.indexOf(req.query.value) === -1) {
    validation_errors.push('value must be one of the following values: 10, 50, 100, ' +
      '500, 1000, 5000')
  }
  return validation_errors
}
