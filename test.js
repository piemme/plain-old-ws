'use strict'
var test = require('tape-catch')
var build = require('./')
var plainOldWs

test('simple test', function (t) {
  plainOldWs = build()
  t.equal(plainOldWs.theOne(), 1, 'the one is 1')
  t.end()
})
