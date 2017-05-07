
import React from 'react'
import Base from '../Base'
import PropTypes from 'prop-types'
import { range, memoize } from 'lodash'
import randomDelays from './randomDelays'
import { animate, animationName, defaults, preside } from '../util'

const defaultSize = 18
const memoizedRandomDelays = memoize(randomDelays)

const CubeGrid = ({ color, col, size, row, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('cube-grid')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const grid = {
    display: 'flex',
    flexFlow: 'row wrap',
    height: finalSize,
    width: finalSize
  }
  const cube = {
    ...animate({ name }),
    backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
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

CubeGrid.contextTypes = defaults.contextTypes

CubeGrid.defaultProps = {
  col: 3,
  row: 3,
  size: defaultSize
}

CubeGrid.propTypes = {
  /**
   * The color of the tiles.
   */
  color: PropTypes.string,
  /**
   * The amount of columns.
   */
  col: PropTypes.number,
  /**
   * The amount of rows.
   */
  row: PropTypes.number,
  /**
   * The size of the grid.
   */
  size: PropTypes.number
}

export default CubeGrid
