import React, { PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import animate from './animate'
import Container from './Container'

const DoubleBounce = ({ color, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'DoubleBounce'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const ball = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    borderRadius: '100%',
    height: '100%',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
          }
        }

        @keyframes ${name} {
          0%, 100% {
            transform: scale(${scaleStart});
            -webkit-transform: scale(${scaleStart});
          }
          50% {
            transform: scale(${scaleEnd});
            -webkit-transform: scale(${scaleEnd});
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
              delay: '-1.0s'
            })
          }}
        />
      </div>
    </Container>
  )
}

DoubleBounce.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

DoubleBounce.defaultProps = {
  scaleEnd: 1,
  scaleStart: 0
}

DoubleBounce.propTypes = {
  ...propTypes,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default DoubleBounce
