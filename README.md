# better-react-spinkit

[![npm][npm-image]][npm-url]
[![npm][npm-downloads-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/better-react-spinkit.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dt/better-react-spinkit.svg?maxAge=2592000
[npm-url]: https://www.npmjs.com/package/better-react-spinkit
[travis-image]: https://img.shields.io/travis/bentatum/better-react-spinkit.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/better-react-spinkit
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

A collection of loading indicators animated with CSS, powered by React.

Donate BTC: `1H7dDZeisBvvnJZtXJ7f5TCqNv2W3MnRN2`

Donate ETH: `0x660ABF8bc22FDCebe26bb570f02D47C2b9828432`

Donate LTC: `LQJsuBUg1kPrxJT7KWjcAFVQaDsY7h1f6B`

## Install
`npm i better-react-spinkit`

## Usage
```js
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave
} from 'better-react-spinkit'

// somewhere in a render function ...
<Circle />
```

## Context Configuration
Optionally, you can configure size and color props in context to avoid managing configuration on each instance.
```js
import { default as React, Component, PropTypes } from 'react'
import { ThreeBounce } from 'better-react-spinkit'

class Application extends Component {
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
  render () {
    // Inline props override the contextual settings.
    return (
      <ThreeBounce size={15} color='blue' />
    )
  }
}
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)

## Documentation

👀 [docs](http://better-react-spinkit.benjamintatum.com/)
