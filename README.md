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

A collection of loading indicators animated with CSS, powered by React.

## Install
`npm i better-react-spinkit`

## Usage

```js
import { ThreeBounce } from 'better-react-spinkit'

const MyComponent = ({ loading }) =>
  <If condition={loading}>
    <ThreeBounce />
  </If>

export default MyComponent
```

## Context Configuration
Optionally, you can configure size and color props in context to avoid managing configuration on each instance.
```js
import { Component, PropTypes } from 'react'

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
  render () { ... }
}
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)

See the whole library in action [here](http://benjamintatum.com/better-react-spinkit).
