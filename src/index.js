'use strict'

const load = require('require-load')
const callsite = require('callsite')

// Patch native require.
const proto = Object.getPrototypeOf(require)
Object.defineProperties(proto, {
  include: {
    writable: false,
    value: function include (sources) {
      [].concat(sources).forEach(require)
    }
  },
  ensure: {
    writable: false,
    value: function ensure (sources, cb) {
      var callFile = getCallingFile()
      var callModule = require.cache[callFile]
      var opts = { file: callFile }
      sources = [].concat(sources)
      Promise.all(sources.map(function (source) {
        return load(source, opts)
      })).then(function () {
        cb(callModule.require)
      })
    }
  }
})

/**
 * Gets the file from which a function was called.
 *
 * @return {String}
 */
function getCallingFile () {
  return callsite()[2].getFileName()
}
