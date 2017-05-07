
import React from 'react'
import PropTypes from 'prop-types'
import BaseCircle from '../Base/Circle'
import { animationName } from '../util'

const defaultSize = 22

const Circle = ({ scaleEnd, scaleStart, ...props }) => {
  const name = animationName('circle')
  return (
    <BaseCircle
      css={`
        @-webkit-keyframes ${name} {
          0%, 80%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          40% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }

        @keyframes ${name} {
          0%, 80%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          } 40% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
      `}
      defaultSize={defaultSize}
      name={name}
      {...props}
    />
  )
}

Circle.defaultProps = {
  scaleEnd: 0.7,
  scaleStart: 0.4,
  size: defaultSize
}

Circle.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
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

export default Circle
