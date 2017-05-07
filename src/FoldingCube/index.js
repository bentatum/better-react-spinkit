
import React from 'react'
import Base from '../Base'
import { range } from 'lodash'
import PropTypes from 'prop-types'
import cubeDelay from './cubeDelay'
import cubeRotateZ from './cubeRotateZ'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18

const FoldingCube = ({ color, duration, secondBounceDelay, size, timingFunction, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('folding-cube')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
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
    backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
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

FoldingCube.contextTypes = defaults.contextTypes

FoldingCube.defaultProps = {
  duration: '2.4s',
  size: defaultSize,
  timingFunction: 'linear'
}

FoldingCube.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The duration of the animation.
   */
  duration: PropTypes.string,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number,
  timingFunction: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])
}

export default FoldingCube
