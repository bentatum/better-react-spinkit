
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18

const ChasingDots = ({ color, dotSize, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('chasing-dots')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const outer = {
    ...animate({ name: `${name}-rotate` }),
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const dot = {
    ...animate({ name: `${name}-bounce` }),
    backgroundColor: color || betterReactSpinkit.color || defaults.color,
    borderRadius: '100%',
    display: 'inline-block',
    height: dotSize,
    position: 'absolute',
    top: 0,
    width: dotSize
  }
  const dotTwo = {
    ...dot,
    ...animate({ delay: '-1.0s' }),
    bottom: 0,
    top: 'auto'
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name}-rotate {
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @keyframes ${name}-rotate {
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @-webkit-keyframes ${name}-bounce {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
        @keyframes ${name}-bounce {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        <div style={dot} />
        <div style={dotTwo} />
      </div>
    </Base>
  )
}

ChasingDots.contextTypes = defaults.contextTypes

ChasingDots.defaultProps = {
  dotSize: '45%',
  scaleEnd: 1,
  scaleStart: 0,
  size: defaultSize
}

ChasingDots.propTypes = {
  /**
   * The color of the dots.
   */
  color: PropTypes.string,
  /**
   * The maximum size of the dots.
   */
  dotSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * End the animation with dots at x times the size value.
   */
  scaleEnd: PropTypes.number,
  /**
   * Start the animation with dots at x times the size value.
   */
  scaleStart: PropTypes.number,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number
}

export default ChasingDots
