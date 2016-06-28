import { default as React, PropTypes } from 'react'
import { default as animate } from './animate'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as Container } from './Container'

const ChasingDots = ({ color, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'ChasingDots'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    ...animate({ name: `${name}Rotate` }),
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  const dot = {
    ...animate({ name: `${name}Bounce` }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    borderRadius: '100%',
    display: 'inline-block',
    height: '60%',
    position: 'absolute',
    top: 0,
    width: '60%'
  }
  const dotTwo = {
    ...dot,
    ...animate({ delay: '-1.0s' }),
    bottom: 0,
    top: 'auto'
  }
  return (
    <Container
      css={`
        @-webkit-keyframes ${name}Rotate {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes ${name}Rotate {
          100% {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
          }
        }

        @-webkit-keyframes ${name}Bounce {
          0%, 100% {
            -webkit-transform: scale(${scaleStart});
          }
          50% {
            -webkit-transform: scale(${scaleEnd});
          }
        }

        @keyframes ${name}Bounce {
          0%, 100% {
            transform: scale(${scaleStart});
            -webkit-transform: scale(${scaleStart});
          }
          50% {
            transform: scale(${scaleEnd});
            -webkit-transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        <div style={dot} />
        <div style={dotTwo} />
      </div>
    </Container>
  )
}

ChasingDots.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

ChasingDots.defaultProps = {
  scaleEnd: 1,
  scaleStart: 0
}

ChasingDots.propTypes = {
  ...propTypes,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default ChasingDots
