import React, { PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import animate from './animate'
import range from 'lodash.range'
import Container from './Container'

const Wave = ({ color, count, scaleYEnd, scaleYStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'Wave'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    width: finalSize
  }
  const square = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    display: 'inline-block',
    height: '100%',
    width: `${(100 / count)}%`
  }
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          0%, 40%, 100% {
            -webkit-transform: scaleY(${scaleYStart})
          }
          20% {
            -webkit-transform: scaleY(${scaleYEnd})
          }
        }

        @keyframes ${name} {
          0%, 40%, 100% {
            transform: scaleY(${scaleYStart});
            -webkit-transform: scaleY(${scaleYStart});
          }
          20% {
            transform: scaleY(${scaleYEnd});
            -webkit-transform: scaleY(${scaleYEnd});
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        {range(count).map((index) =>
          <div
            key={index}
            style={{
              ...square,
              ...animate({
                delay: `-${index / 10}s`
              })
            }}
          />
        )}
      </div>
    </Container>
  )
}

Wave.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

Wave.defaultProps = {
  count: 12,
  scaleYEnd: 1,
  scaleYStart: 0
}

Wave.propTypes = {
  ...propTypes,
  count: PropTypes.number,
  scaleYEnd: PropTypes.number,
  scaleYStart: PropTypes.number
}

export default Wave
