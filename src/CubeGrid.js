import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as range } from 'lodash.range'
import { default as animate } from './animate'
import { default as Base } from './Base'
import { default as memoize } from 'lodash.memoize'

const name = 'brsk-cube-grid'
const defaultSize = 16

const randomDelays = (total) => {
  const delays = []
  for (let i = 0; i < total; i++) {
    delays.push((Math.random() * (1.0 - 0.1) + 0.1).toFixed(2))
  }
  return delays
}

const memoizedRandomDelays = memoize(randomDelays)

const CubeGrid = ({ color, col, size, row, ...props }, { betterReactSpinkit = {} }) => {
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
    height: `${(100 / row)}%`,
    width: `${(100 / col)}%`
  }
  const total = row * col
  if (total > 1000) {
    return null
  }
  const delays = memoizedRandomDelays(total)
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
                    transform: scale3D(1, 1, 1);
          }
          35% {
            -webkit-transform: scale3D(0, 0, 1);
                    transform: scale3D(0, 0, 1);
          }
        }
        @keyframes ${name} {
          0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
                    transform: scale3D(1, 1, 1);
          }
          35% {
            -webkit-transform: scale3D(0, 0, 1);
                    transform: scale3D(0, 0, 1);
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
    </Base>
  )
}

CubeGrid.contextTypes = contextTypes

CubeGrid.defaultProps = {
  col: 3,
  row: 3
}

CubeGrid.propTypes = {
  color: PropTypes.string,
  col: PropTypes.number,
  row: PropTypes.number,
  size: PropTypes.number
}

export default CubeGrid
