
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18

const DoubleBounce = ({ color, duration, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('double-bounce')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const ball = {
    ...animate({ name, duration }),
    backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
    borderRadius: '100%',
    height: '100%',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
        @keyframes ${name} {
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
        <div style={ball} />
        <div
          style={{
            ...ball,
            ...animate({
              delay: '-1s'
            })
          }}
        />
      </div>
    </Base>
  )
}

DoubleBounce.contextTypes = defaults.contextTypes

DoubleBounce.defaultProps = {
  duration: '2s',
  scaleEnd: 1,
  scaleStart: 0,
  size: defaultSize
}

DoubleBounce.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The duration of the animation.
   */
  duration: PropTypes.string,
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

export default DoubleBounce
