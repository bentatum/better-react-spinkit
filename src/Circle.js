import { default as React, PropTypes } from 'react'
import { default as BaseCircle } from './BaseCircle'

const name = 'brsk-circle'

const Circle = ({ scaleEnd, scaleStart, ...props }) =>
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
    name={name}
    {...props}
  />

Circle.defaultProps = {
  scaleEnd: 1,
  scaleStart: 0
}

Circle.propTypes = {
  scaleEnd: PropTypes.number.isRequired,
  scaleStart: PropTypes.number.isRequired
}

export default Circle
