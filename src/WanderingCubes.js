import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'

const defaultSize = 16

const WanderingCubes = ({ color, cubeSize, duration, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-wandering-cubes'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const cube = {
    ...animate({ name, duration }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
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

WanderingCubes.contextTypes = contextTypes

WanderingCubes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  cubeSize: PropTypes.number,
  duration: PropTypes.string
}

WanderingCubes.defaultProps = {
  cubeSize: 7,
  duration: '2s'
}

export default WanderingCubes
