var assert = require('assert')
require('..')

describe('require-ensure', function () {
  it('should async load a file', function (done) {
    const filePath = require.resolve('./examples/export-values')
    assert(!require.cache[filePath], 'should not be loaded')
    require.ensure('./examples/export-values', function () {
      assert(require.cache[filePath], 'should be loaded')
      done()
    })
  })

  it('should async load a multiple files', function (done) {
    const files = [
      './examples/module-export-function',
      './examples/module-export-object'
    ]
    const filePaths = files.map(require.resolve)

    filePaths.forEach(filePath => {
      assert(!require.cache[filePath], 'should not be loaded')
    })

    require.ensure(files, function () {
      filePaths.forEach(filePath => {
        assert(require.cache[filePath], 'should be loaded')
      })
      done()
    })
  })
})
