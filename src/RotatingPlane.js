import { default as React, PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as animate } from './animate'
import { default as Container } from './Container'

const RotatingPlane = ({ color, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'RotatingPlane'
  const zeroPercent = 'perspective(120px) rotateX(0deg) rotateY(0deg)'
  const fiftyPercent = 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)'
  const oneHundredPercent = 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: ${zeroPercent};
          }
          50% {
            -webkit-transform: ${fiftyPercent};
          }
          100% {
            -webkit-transform: ${oneHundredPercent};
          }
        }

        @keyframes ${name} {
          0% {
            transform: ${zeroPercent};
            -webkit-transform: ${zeroPercent};
          }
          50% {
            transform: ${fiftyPercent};
            -webkit-transform: ${fiftyPercent};
          }
          100% {
            transform: ${oneHundredPercent};
            -webkit-transform: ${oneHundredPercent};
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name }),
          backgroundColor: color || betterReactSpinkit.color || defaultColor,
          height: finalSize,
          width: finalSize
        }}
      />
    </Container>
    )
}

RotatingPlane.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

RotatingPlane.propTypes = {
  ...propTypes
}

export default RotatingPlane
