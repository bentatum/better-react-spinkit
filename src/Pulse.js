import React, { PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import animate from './animate'
import Container from './Container'

const Pulse = ({ color, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'Pulse'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  return (
    <Container
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
            transform: scale(${scaleStart});
            -webkit-transform: scale(${scaleStart});
          }
          100% {
            transform: scale(${scaleEnd});
            -webkit-transform: scale(${scaleEnd});
            opacity: 0;
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name }),
          backgroundColor: color || betterReactSpinkit.color || defaultColor,
          borderRadius: '100%',
          height: finalSize,
          width: finalSize
        }}
      />
    </Container>
  )
}

Pulse.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

Pulse.defaultProps = {
  scaleEnd: 1,
  scaleStart: 0
}

Pulse.propTypes = {
  ...propTypes,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default Pulse
