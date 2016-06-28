import { default as React, PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as range } from 'lodash.range'
import { default as animate } from './animate'
import { default as Container } from './Container'
import { default as memoize } from 'lodash.memoize'

const randomDelays = (total) => {
  const delays = []
  for (let i = 0; i < total; i++) {
    delays.push((Math.random() * (1.0 - 0.1) + 0.1).toFixed(2))
  }
  return delays
}

const memoizedRandomDelays = memoize(randomDelays)

const CubeGrid = ({ color, cols, size, rows, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'CubeGrid'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const grid = {
    display: 'flex',
    flexFlow: 'row wrap',
    height: finalSize,
    width: finalSize
  }
  const cube = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    height: `${(100 / rows)}%`,
    width: `${(100 / cols)}%`
  }
  const total = rows * cols
  const delays = memoizedRandomDelays(total)
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          0%, 70%, 100% {
            -webkit-transform:scale3D(1.0, 1.0, 1.0);
          }
          35% {
            -webkit-transform:scale3D(0.0, 0.0, 1.0);
          }
        }

        @keyframes ${name} {
          0%, 70%, 100% {
            -webkit-transform:scale3D(1.0, 1.0, 1.0);
            transform:scale3D(1.0, 1.0, 1.0);
          }
          35% {
            -webkit-transform:scale3D(1.0, 1.0, 1.0);
            transform:scale3D(0.0, 0.0, 1.0);
          }
        }
      `}
      {...props}
    >
      <div style={grid}>
        {range(total).map((index) =>
          <div
            key={index}
            style={{
              ...cube,
              ...animate({
                delay: `${delays[index]}s`
              })
            }}
          />
        )}
      </div>
    </Container>
  )
}

CubeGrid.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

CubeGrid.defaultProps = {
  cols: 3,
  rows: 3
}

CubeGrid.propTypes = {
  ...propTypes,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired
}

export default CubeGrid
