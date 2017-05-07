
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18

const RotatingPlane = ({ color, duration, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('rotating-plane')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
          }
          100% {
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
        }
        @keyframes ${name} {
          0% {
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
          }
          100% {
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name, duration }),
          backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
          height: finalSize,
          width: finalSize
        }}
      />
    </Base>
  )
}

RotatingPlane.contextTypes = defaults.contextTypes

RotatingPlane.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The duration of the animation.
   */
  duration: PropTypes.string,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number
}

RotatingPlane.defaultProps = {
  duration: '1.2s',
  size: defaultSize
}

export default RotatingPlane
