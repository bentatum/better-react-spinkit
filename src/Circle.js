import { default as React, PropTypes } from 'react'
import { color as defaultColor, size as defaultSize, propTypes } from './defaults'
import { default as range } from 'lodash.range'
import { default as prefixr } from 'react-prefixr'
import { default as animate } from './animate'
import { default as Container } from './Container'

const name = 'Circle'

const rotate = [
  0,
  30,
  60,
  90,
  120,
  150,
  180,
  210,
  240,
  270,
  300,
  330
]

const delays = [
  0,
  1.1,
  1.0,
  0.9,
  0.8,
  0.7,
  0.6,
  0.5,
  0.4,
  0.3,
  0.2,
  0.1
]

const applyRotate = (index) => prefixr({
  transform: `rotate(${rotate[index]}deg)`
})

const innerCircle = {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
}

const innerCircleBefore = {
  ...animate({
    name,
    fillMode: 'both'
  }),
  borderRadius: '100%',
  height: '20%',
  margin: '0 auto',
  width: '20%'
}

const InnerCircle = ({ color, index }) =>
  <div
    style={{
      ...innerCircle,
      ...applyRotate(index)
    }}
  >
    <div
      style={{
        ...innerCircleBefore,
        ...animate({
          delay: `-${delays[index]}s`
        }),
        backgroundColor: color
      }}
    />
  </div>

InnerCircle.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

const Circle = ({ color, scaleStart, scaleEnd, size, ...props }, { betterReactSpinkit = {} }) => {
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
  }
  return (
    <Container
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
            -webkit-transform: scale(${scaleStart});
            transform: scale(${scaleStart});
          } 40% {
            -webkit-transform: scale(${scaleEnd});
            transform: scale(${scaleEnd});
          }
        }
      `}
      {...props}
    >
      <div style={outer}>
        {range(12).map((index) =>
          <InnerCircle
            color={color || betterReactSpinkit.color || defaultColor}
            index={index}
            key={index}
          />
        )}
      </div>
    </Container>
  )
}

Circle.contextTypes = {
  betterReactSpinkit: PropTypes.object
}

Circle.defaultProps = {
  scaleEnd: 1,
  scaleStart: 0
}

Circle.propTypes = {
  ...propTypes,
  scaleEnd: PropTypes.number,
  scaleStart: PropTypes.number
}

export default Circle
