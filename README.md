<h1 align="center">
  require.ensure polyfill
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/require-ensure">
    <img src="https://img.shields.io/npm/v/require-ensure.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/require-ensure">
    <img src="https://img.shields.io/npm/dm/require-ensure.svg?style=flat-square" alt="Downloads"/>
  </a>
</h1>

An isomorphic require.ensure polyfill that works in nodejs.
This module is actually async and uses [require-load](https://github.com/DylanPiercey/require-load) to dynamically load files.

Works great with [webpack codesplitting](https://webpack.github.io/docs/code-splitting.html#es6-modules).

## Installation

#### Npm
```bash
npm install require-ensure
```

## Example

#### Setup require-ensure for node.

```bash
node -r require-ensure ./test.js
```

or

```javascript
require('require-ensure')
require('./test')
```

#### Use require.ensure

```javascript
require.ensure(['lodash', 'react'], function (require) {
  const _ = require('lodash')
  const React = require('react')
})
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
