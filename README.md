# better-react-spinkit

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/better-react-spinkit.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/better-react-spinkit
[travis-image]: https://img.shields.io/travis/bentatum/better-react-spinkit.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/better-react-spinkit
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Installation
`npm i better-react-spinkit`

## Configuration
Globally configure size and color to avoid having to set them on every instance.
```javascript
import { Component, PropTypes } from 'react'

class ParentComponent extends Component {

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object
  };
  
  getChildContext () {
    return {
      betterReactSpinkit: {
        color: 'green',
        size: 25
      }
    }
  }
  
  render () { ... }
}
```

## Usage
```javascript
import { DoubleBounce } from 'better-react-spinkit'
<DoubleBounce size={50}/>
```

See more examples on the [demo page](http://benjamintatum.com/better-react-spinkit).
