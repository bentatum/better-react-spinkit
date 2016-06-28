import { default as React, PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as animate } from './animate'
import { default as Container } from './Container'

const Wordpress = ({ color, innerColor, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = 'Wordpress'
  const defaultInnerSize = 1
  const innerSize = ((size || betterReactSpinkit.size || defaultInnerSize) / 4)
  const innerOffset = '18%'
  const finalSize = size || betterReactSpinkit.size || defaultSize
  return (
    <Container
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes ${name} {
          0% {
            transform: rotate(0);
            -webkit-transform:rotate(0);
          }
          100% {
            transform: rotate(360deg);
            -webkit-transform:rotate(360deg);
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
            borderRadius: innerSize,
            display: 'block',
            height: innerSize,
            left: innerOffset,
            position: 'absolute',
            top: innerOffset,
            width: innerSize
          }}
        />
      </div>
    </Container>
  )
}

Wordpress.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

Wordpress.defaultProps = {
  innerColor: '#fff'
}

Wordpress.propTypes = {
  ...propTypes,
  innerColor: PropTypes.string
}

export default Wordpress
