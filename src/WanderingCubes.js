import { default as React, PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as animate } from './animate'
import { default as Container } from './Container'

const WanderingCubes = ({ color, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'WanderingCubes'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const cube = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    height: 10,
    position: 'absolute',
    width: 10
  }
  const twentyFivePercent = 'translateX(22px) rotate(-90deg) scale(0.5)'
  const fiftyPercent = 'translateX(22px) translateY(22px) rotate(-180deg)'
  const seventyFivePercent = 'translateX(0px) translateY(22px) rotate(-270deg) scale(0.5)'
  const altTwentyFivePercent = 'translateX(42px) rotate(-90deg) scale(0.5)'
  const altFiftyPercent = 'translateX(42px) translateY(42px) rotate(-179deg)'
  const fiftyOnePercent = 'translateX(42px) translateY(42px) rotate(-180deg)'
  const altSeventyFivePercent = 'translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)'
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          25% {
            -webkit-transform: ${twentyFivePercent};
          }
          50% {
            -webkit-transform: ${fiftyPercent};
          }
          75% {
            -webkit-transform: ${seventyFivePercent};
          }
          100% {
            -webkit-transform: rotate(-360deg);
          }
        }

        @keyframes ${name} {
          25% {
            transform: ${altTwentyFivePercent};
            -webkit-transform: ${altTwentyFivePercent};
          }
          50% {
            /* Hack to make FF rotate in the right direction */
            transform: ${altFiftyPercent};
            -webkit-transform: ${altFiftyPercent};
          }
          50.1% {
            transform: ${fiftyOnePercent};
            -webkit-transform: ${fiftyOnePercent};
          }
          75% {
            transform: ${altSeventyFivePercent};
            -webkit-transform: ${altSeventyFivePercent};
          }
          100% {
            transform: rotate(-360deg);
            -webkit-transform: rotate(-360deg);
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
    </Container>
  )
}

WanderingCubes.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

WanderingCubes.propTypes = {
  ...propTypes
}

export default WanderingCubes
