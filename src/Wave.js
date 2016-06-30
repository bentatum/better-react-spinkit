import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as range } from 'lodash.range'
import { default as Base } from './Base'

const defaultSize = 35

const Wave = ({ color, columnWidth, gutterWidth, scaleYEnd, scaleYStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-wave'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    display: 'flex',
    justifyContent: 'space-between',
    height: finalSize - (finalSize * 0.2),
    width: finalSize
  }
  const column = {
    ...animate({ name }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
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
        {range(6).map((index) =>
          <div
            key={index}
            style={{
              ...column,
              ...animate({ delay: `-${index / 10}s` }),
              marginRight: index !== 5 ? gutterWidth : 0
            }}
          />
        )}
      </div>
    </Base>
  )
}

Wave.contextTypes = contextTypes

Wave.defaultProps = {
  columnWidth: 5,
  gutterWidth: 2,
  scaleYEnd: 1,
  scaleYStart: 0.4
}

Wave.propTypes = {
  color: PropTypes.string,
  columnWidth: PropTypes.number,
  gutterWidth: PropTypes.number,
  scaleYEnd: PropTypes.number,
  scaleYStart: PropTypes.number,
  size: PropTypes.number
}

export default Wave
