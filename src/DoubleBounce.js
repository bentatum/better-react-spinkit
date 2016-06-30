import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'

const defaultSize = 18

const DoubleBounce = ({ color, duration, scaleEnd, scaleStart, secondBounceDelay, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-double-bounce'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const ball = {
    ...animate({ name, duration }),
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
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
        @keyframes ${name} {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
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
              delay: secondBounceDelay
            })
          }}
        />
      </div>
    </Base>
  )
}

DoubleBounce.contextTypes = contextTypes

DoubleBounce.defaultProps = {
  duration: '2s',
  scaleEnd: 1,
  scaleStart: 0,
  secondBounceDelay: '-1.0s'
}

DoubleBounce.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number,
  size: PropTypes.number,
  secondBounceDelay: PropTypes.string
}

export default DoubleBounce
