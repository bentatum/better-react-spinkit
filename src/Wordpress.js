import { default as React, PropTypes } from 'react'
import { color as defaultColor, contextTypes } from './defaults'
import { default as animate } from './animate'
import { default as Base } from './Base'
const defaultSize = 18

const Wordpress = ({ color, innerColor, innerSize, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'brsk-wordpress'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const finalInnerSize = innerSize || finalSize / 4
  const innerOffset = '18%'
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
        @keyframes ${name} {
          0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({
            name,
            timingFunction: 'linear'
          }),
          backgroundColor: color || betterReactSpinkit.color || defaultColor,
          borderRadius: finalSize,
          display: 'inline-block',
          height: finalSize,
          position: 'relative',
          width: finalSize
        }}
      >
        <div
          style={{
            backgroundColor: innerColor,
            borderRadius: finalInnerSize,
            display: 'block',
            height: finalInnerSize,
            left: innerOffset,
            position: 'absolute',
            top: innerOffset,
            width: finalInnerSize
          }}
        />
      </div>
    </Base>
  )
}

Wordpress.contextTypes = contextTypes

Wordpress.defaultProps = {
  innerColor: '#fff'
}

Wordpress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  innerColor: PropTypes.string,
  innerSize: PropTypes.number
}

export default Wordpress
