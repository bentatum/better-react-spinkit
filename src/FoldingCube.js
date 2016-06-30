import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'
import { default as range } from 'lodash.range'

const defaultSize = 25

function cubeRotateZ (i) {
  switch (i) {
    case 1:
      return '90deg'
    case 3:
      return '180deg'
    case 2:
      return '270deg'
    default:
      return false
  }
}

function cubeDelay (i) {
  switch (i) {
    case 1:
      return '0.3s'
    case 3:
      return '0.6s'
    case 2:
      return '0.9s'
    default:
      return false
  }
}

const FoldingCube = ({ color, duration, fillMode, secondBounceDelay, size, timingFunction, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-folding-cube'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    padding: finalSize / 4,
    position: 'relative',
    transform: 'rotateZ(45deg)',
    width: finalSize,
    WebkitTransform: 'rotateZ(45deg)'
  }
  const cube = {
    float: 'left',
    height: '50%',
    position: 'relative',
    width: '50%',
    WebkitTransform: 'scale(1.1)',
    MsTransform: 'scale(1.1)',
    transform: 'scale(1.1)'
  }
  const cubeBefore = {
    ...animate({ name, duration, timingFunction }),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    WebkitTransformOrigin: '100% 100%',
    MsTransformOrigin: '100% 100%',
    TransformOrigin: '100% 100%'
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
                    opacity: 0;
          }
          25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
                    opacity: 1;
          }
          90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
                    opacity: 0;
          }
        }
        @keyframes ${name} {
          0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
                    opacity: 0;
          }
          25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
                    opacity: 1;
          }
          90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
                    opacity: 0;
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        {range(4).map((index) => {
          const rotateZ = cubeRotateZ(index)
          const transform = `scale(1.1) rotateZ(${rotateZ})`
          const delay = cubeDelay(index)
          return (
            <div
              key={index}
              style={{
                ...cube,
                ...(rotateZ ? { transform, WebkitTransform: transform } : {})
              }}
            >
              <div
                style={{
                  ...cubeBefore,
                  ...(delay ? animate({ delay }) : {})
                }}
              />
            </div>
          )
        })}
      </div>
    </Base>
  )
}

FoldingCube.contextTypes = contextTypes

FoldingCube.defaultProps = {
  duration: '2.4s',
  fillMode: 'both',
  timingFunction: 'linear'
}

FoldingCube.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  fillMode: PropTypes.oneOf(['none', 'forwards', 'backwards', 'both']),
  size: PropTypes.number,
  timingFunction: PropTypes.string
}

export default FoldingCube
