'use strict'

function plainOldWs () {
  var result = 1

  return {
    theOne: theOne
  }

  function theOne () {
    return result
  }
}
module.exports = plainOldWs
