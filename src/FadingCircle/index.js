
import React from 'react'
import PropTypes from 'prop-types'
import BaseCircle from '../Base/Circle'
import { animationName } from '../util'

const defaultSize = 22

const FadingCircle = ({ startOpacity, endOpacity, ...props }) => {
  const name = animationName('fading-circle')
  return (
    <BaseCircle
      css={`
        @-webkit-keyframes ${name} {
          0%, 39%, 100% {
            opacity: ${startOpacity};
          }
          40% {
            opacity: ${endOpacity};
          }
        }
        @keyframes ${name} {
          0%, 39%, 100% {
            opacity: ${startOpacity};
          }
          40% {
            opacity: ${endOpacity};
          }
        }
      `}
      defaultSize={defaultSize}
      name={name}
      {...props}
    />
  )
}

FadingCircle.defaultProps = {
  endOpacity: 1,
  size: defaultSize,
  startOpacity: 0
}

FadingCircle.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The ending opacity value.
   */
  endOpacity: PropTypes.number,
  /**
   * The starting opacity value.
   */
  startOpacity: PropTypes.number,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number
}

export default FadingCircle
