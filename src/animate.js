import omitBy from 'lodash.omitby'
import prefixr from 'react-prefixr'

export default ({ delay, duration, fillMode, iterationCount, name, timingFunction }) => {
  if (name) {
    /* eslint-disable no-param-reassign */

    /*
    *  don't apply defaults unless we have a name declaration
    *  otherwise, assume we're using this to override properties
    */

    duration = duration || '1.2s'
    iterationCount = iterationCount || 'infinite'
    timingFunction = timingFunction || 'ease-in-out'

    /* eslint-enable no-param-reassign */
  }

  return prefixr(omitBy({
    animationDelay: delay,
    animationDuration: duration,
    animationFillMode: fillMode,
    animationIterationCount: iterationCount,
    animationTimingFunction: timingFunction,
    animationName: name
  }, (val) => !val))
}
