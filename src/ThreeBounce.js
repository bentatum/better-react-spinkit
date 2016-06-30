import { default as React, PropTypes } from 'react'
import { default as animate } from './animate'
import { color as defaultColor, contextTypes } from './defaults'
import { default as Base } from './Base'
const defaultSize = 10

const ThreeBounce = ({ color, gutter, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-three-bounce'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const ball = {
    ...animate({
      name,
      fillMode: 'both'
    }),
    backgroundColor: color || betterReactSpinkit.color || defaultColor,
    borderRadius: '100%',
    display: 'inline-block',
    height: finalSize,
    width: finalSize
  }
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0%, 80%, 100% {
            -webkit-transform: scale(${scaleStart});
          }
          40% {
            -webkit-transform: scale(${scaleEnd});
          }
        }

        @keyframes ${name} {
          0%, 80%, 100% {
            transform: scale(${scaleStart});
            -webkit-transform: scale(${scaleStart});
          }
          40% {
            transform: scale(${scaleEnd});
            -webkit-transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...ball,
          ...animate({ delay: '-0.32s' }),
          marginRight: gutter
        }}
      />
      <div
        style={{
          ...ball,
          ...animate({ delay: '-0.16s' }),
          marginRight: gutter
        }}
      />
      <div
        style={{
          ...ball
        }}
      />
    </Base>
  )
}

ThreeBounce.contextTypes = contextTypes

ThreeBounce.defaultProps = {
  scaleEnd: 0,
  scaleStart: 1,
  gutter: 1
}

ThreeBounce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  gutter: PropTypes.number,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default ThreeBounce
