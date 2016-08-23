import { default as React, PropTypes } from 'react'
import { animate, animationName, defaults, preside } from '../util'
import { default as range } from 'lodash.range'
import { default as Base } from '../Base'
const defaultSize = 22

const Wave = ({ color, columns, columnWidth, gutterWidth, scaleYEnd, scaleYStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('wave')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  const outer = {
    display: 'flex',
    justifyContent: 'space-between',
    height: finalSize - (finalSize * 0.2),
    width: finalSize
  }
  const column = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaults.color,
    height: '100%',
    width: columnWidth
  }
  return (
    <Base
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
        {range(columns).map((index) =>
          <div
            key={index}
            style={{
              ...column,
              ...animate({ delay: `-${index / 10}s` }),
              marginRight: index !== columns ? gutterWidth : 0
            }}
          />
        )}
      </div>
    </Base>
  )
}

Wave.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The amount of columns.
   */
  columns: PropTypes.number,
  /**
   * The width of each column.
   */
  columnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The pixel value between columns.
   */
  gutterWidth: PropTypes.number,
  /**
   * Ending column height.
   */
  scaleYEnd: PropTypes.number,
  /**
   * Starting column height.
   */
  scaleYStart: PropTypes.number,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number
}

Wave.defaultProps = {
  columns: 5,
  columnWidth: '20%',
  gutterWidth: 1,
  scaleYEnd: 1,
  scaleYStart: 0.4,
  size: defaultSize
}

Wave.contextTypes = defaults.contextTypes

export default Wave
