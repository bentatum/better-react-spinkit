import { default as React, PropTypes } from 'react'
import { default as BaseCircle } from './BaseCircle'

const name = 'brsk-fading-circle'

const FadingCircle = ({ startOpacity, endOpacity, ...props }) =>
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
    name={name}
    {...props}
  />

FadingCircle.defaultProps = {
  endOpacity: 1,
  startOpacity: 0
}

FadingCircle.propTypes = {
  color: PropTypes.string,
  endOpacity: PropTypes.number,
  startOpacity: PropTypes.number,
  size: PropTypes.number
}

export default FadingCircle
