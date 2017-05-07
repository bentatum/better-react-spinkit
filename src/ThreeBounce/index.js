
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 10

const ThreeBounce = ({ color, duration, gutter, scaleEnd, scaleStart, size, timingFunction, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('three-bounce')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const ball = {
    ...animate({ duration, name, timingFunction }),
    backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
    borderRadius: '100%',
    display: 'inline-block',
    height: finalSize,
    width: finalSize
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 80%, 100% {
            -webkit-transform: scale(${scaleStart});
          }
          40% {
            -webkit-transform: scale(${scaleEnd});
          }
        }

        @keyframes ${name} {
          0%, 80%, 100% {
            transform: scale(${scaleStart});
            -webkit-transform: scale(${scaleStart});
          }
          40% {
            transform: scale(${scaleEnd});
            -webkit-transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...ball,
          ...animate({ delay: '-0.32s' }),
          marginRight: gutter
        }}
      />
      <div
        style={{
          ...ball,
          ...animate({ delay: '-0.16s' }),
          marginRight: gutter
        }}
      />
      <div
        style={{
          ...ball
        }}
      />
    </Base>
  )
}

ThreeBounce.contextTypes = defaults.contextTypes

ThreeBounce.defaultProps = {
  duration: '1.5s',
  size: defaultSize,
  scaleEnd: 1,
  scaleStart: 0,
  gutter: 2,
  timingFunction: 'ease-in-out'
}

ThreeBounce.propTypes = {
  /**
   * The color of the dots.
   */
  color: PropTypes.string,
  /**
   * The speed of the animation.
   */
  duration: PropTypes.string,
  /**
   * The pixel value between dots.
   */
  gutter: PropTypes.number,
  /**
   * End the animation with dots at x times the size value.
   */
  scaleEnd: PropTypes.number,
  /**
   * Start the animation with dots at x times the size value.
   */
  scaleStart: PropTypes.number,
  /**
   * The size of dots.
   */
  size: PropTypes.number,
  timingFunction: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])
}

export default ThreeBounce
