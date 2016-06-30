import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'

const defaultSize = 16

const RotatingPlane = ({ color, duration, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-rotating-plane'
  const finalSize = size || betterReactSpinkit.size || defaultSize
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
          backgroundColor: color || betterReactSpinkit.color || defaultColor,
          height: finalSize,
          width: finalSize
        }}
      />
    </Base>
    )
}

RotatingPlane.contextTypes = contextTypes

RotatingPlane.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  size: PropTypes.number
}

RotatingPlane.defaultProps = {
  duration: '1.2s'
}

export default RotatingPlane
