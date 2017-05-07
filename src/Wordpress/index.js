
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18

const Wordpress = ({ color, duration, innerColor, innerSize, size, timingFunction, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('wordpress')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const finalInnerSize = preside(innerSize, null, finalSize / 4)
  const innerOffset = '18%'
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @keyframes ${name} {
          0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name, timingFunction, duration }),
          backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
          borderRadius: finalSize,
          display: 'inline-block',
          height: finalSize,
          position: 'relative',
          width: finalSize
        }}
      >
        <div
          style={{
            backgroundColor: innerColor,
            borderRadius: finalInnerSize,
            display: 'block',
            height: finalInnerSize,
            left: innerOffset,
            position: 'absolute',
            top: innerOffset,
            width: finalInnerSize
          }}
        />
      </div>
    </Base>
  )
}

Wordpress.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The duration of the animation.
   */
  duration: PropTypes.string,
  /**
   * The color of the inner circle.
   */
  innerColor: PropTypes.string,
  /**
   * The size of the inner circle.
   */
  innerSize: PropTypes.number,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number,
  timingFunction: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])
}

Wordpress.defaultProps = {
  duration: '2s',
  innerColor: '#fff',
  size: defaultSize,
  timingFunction: 'linear'
}

Wordpress.contextTypes = defaults.contextTypes

export default Wordpress
