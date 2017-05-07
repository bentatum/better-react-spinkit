
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 16

const WanderingCubes = ({ color, cubeSize, duration, size, timingFunction, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('wandering-cubes')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const outer = {
    height: finalSize,
    paddingBottom: cubeSize,
    paddingRight: cubeSize,
    position: 'relative',
    width: finalSize
  }
  const cube = {
    ...animate({ name, duration, timingFunction }),
    backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
    height: cubeSize,
    left: 0,
    position: 'absolute',
    top: 0,
    width: cubeSize
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          25% { -webkit-transform: translateX(${finalSize}px) rotate(-90deg) scale(0.5) }
          50% { -webkit-transform: translateX(${finalSize}px) translateY(${finalSize}px) rotate(-180deg) }
          75% { -webkit-transform: translateX(0px) translateY(${finalSize}px) rotate(-270deg) scale(0.5) }
          100% { -webkit-transform: rotate(-360deg) }
        }
        @keyframes ${name} {
          25% { 
            -webkit-transform: translateX(${finalSize}px) rotate(-90deg) scale(0.5);
                    transform: translateX(${finalSize}px) rotate(-90deg) scale(0.5);
          } 50% { 
            -webkit-transform: translateX(${finalSize}px) translateY(${finalSize}px) rotate(-179deg);
                    transform: translateX(${finalSize}px) translateY(${finalSize}px) rotate(-179deg);
          } 50.1% { 
            -webkit-transform: translateX(${finalSize}px) translateY(${finalSize}px) rotate(-180deg);
                    transform: translateX(${finalSize}px) translateY(${finalSize}px) rotate(-180deg);
          } 75% { 
            -webkit-transform: translateX(0px) translateY(${finalSize}px) rotate(-270deg) scale(0.5);
                    transform: translateX(0px) translateY(${finalSize}px) rotate(-270deg) scale(0.5);
          } 100% { 
            -webkit-transform: rotate(-360deg);
                    transform: rotate(-360deg);
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        <div
          style={{
            ...cube
          }}
        />
        <div
          style={{
            ...cube,
            ...animate({
              delay: '-0.9s'
            })
          }}
        />
      </div>
    </Base>
  )
}

WanderingCubes.propTypes = {
  /**
   *  The color of the spinner.
   */
  color: PropTypes.string,
  /**
   *  Maximum size of the cubes
   */
  cubeSize: PropTypes.number,
  /**
   *  The duration of the animation.
   */
  duration: PropTypes.string,
  /**
   *  The size of the spinner.
   */
  size: PropTypes.number,
  timingFunction: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'])
}

WanderingCubes.defaultProps = {
  cubeSize: 7,
  duration: '2s',
  size: defaultSize,
  timingFunction: 'ease-in-out'
}

WanderingCubes.contextTypes = defaults.contextTypes

export default WanderingCubes
