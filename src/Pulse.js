import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'

const name = 'brsk-pulse'
const defaultSize = 20

const Pulse = ({ color, duration, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const finalSize = size || betterReactSpinkit.size || defaultSize
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: scale(${scaleStart});
          }
          100% {
            -webkit-transform: scale(${scaleEnd});
            opacity: 0;
          }
        }
        @keyframes ${name} {
          0% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          100% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
            opacity: 0;
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name, duration }),
          backgroundColor: color || betterReactSpinkit.color || defaultColor,
          borderRadius: '100%',
          height: finalSize,
          width: finalSize
        }}
      />
    </Base>
  )
}

Pulse.contextTypes = contextTypes

Pulse.defaultProps = {
  duration: '1s',
  scaleEnd: 1,
  scaleStart: 0
}

Pulse.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number,
  size: PropTypes.number
}

export default Pulse
