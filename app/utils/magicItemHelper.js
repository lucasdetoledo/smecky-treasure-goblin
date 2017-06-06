'use strict'

module.exports = () => {
  let formatGet

  formatGet = (route) => {
    return {
      uri: `${process.env.HOARDER_URL}/${route}`,
      json: true
    }
  }

  return {
    formatGet: formatGet
  }
}
