import React, { PropTypes } from 'react'
import animate from './animate'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import Container from './Container'

const ThreeBounce = ({ color, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'ThreeBounce'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const ball = {
    ...animate({
      name,
      fillMode: 'both'
    }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    borderRadius: '100%',
    display: 'inline-block',
    height: finalSize,
    width: finalSize
  }
  return (
    <Container
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
            transform: scale(0.0);
            -webkit-transform: scale(${scaleStart});
          }
          40% {
            transform: scale(1.0);
            -webkit-transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...ball,
          ...animate({
            delay: '-0.32s'
          })
        }}
      />
      <div
        style={{
          ...ball,
          ...animate({
            delay: '-0.16s'
          })
        }}
      />
      <div
        style={{
          ...ball
        }}
      />
    </Container>
  )
}

ThreeBounce.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

ThreeBounce.defaultProps = {
  scaleEnd: 0,
  scaleStart: 1
}

ThreeBounce.propTypes = {
  ...propTypes,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default ThreeBounce
