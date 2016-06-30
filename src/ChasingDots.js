import { default as React, PropTypes } from 'react'
import { default as animate } from './animate'
import { color as defaultColor, contextTypes } from './defaults'
import { default as Base } from './Base'

const name = 'brsk-chasing-dots'
const defaultSize = 18

const ChasingDots = ({ color, dotSize, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    ...animate({ name: `${name}-rotate` }),
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const dot = {
    ...animate({ name: `${name}-bounce` }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    borderRadius: '100%',
    display: 'inline-block',
    height: dotSize,
    position: 'absolute',
    top: 0,
    width: dotSize
  }
  const dotTwo = {
    ...dot,
    ...animate({ delay: '-1.0s' }),
    bottom: 0,
    top: 'auto'
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name}-rotate {
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @keyframes ${name}-rotate {
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @-webkit-keyframes ${name}-bounce {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
          }
        }
        @keyframes ${name}-bounce {
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
        <div style={dot} />
        <div style={dotTwo} />
      </div>
    </Base>
  )
}

ChasingDots.contextTypes = contextTypes

ChasingDots.defaultProps = {
  dotSize: '45%',
  scaleEnd: 1,
  scaleStart: 0
}

ChasingDots.propTypes = {
  color: PropTypes.string,
  dotSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number,
  size: PropTypes.number
}

export default ChasingDots
