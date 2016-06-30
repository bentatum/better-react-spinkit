import { default as React, PropTypes } from 'react'
import { color as defaultColor, propTypes, contextTypes } from './defaults'
import { default as range } from 'lodash.range'
import { default as prefixr } from 'react-prefixr'
import { default as animate } from './animate'
import { default as Base } from './Base'

const defaultSize = 18

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

const BaseCircle = ({ color, name, size, ...props }, { betterReactSpinkit = {} }) => {
  const finalSize = size || betterReactSpinkit.size || defaultSize
  const outer = {
    height: finalSize,
    position: 'relative',
    width: finalSize
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
  return (
    <Base {...props}>
      <div style={outer}>
        {range(12).map((index) =>
          <div
            key={index}
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
                backgroundColor: color || betterReactSpinkit.color || defaultColor
              }}
            />
          </div>
        )}
      </div>
    </Base>
  )
}

BaseCircle.contextTypes = contextTypes

BaseCircle.propTypes = {
  ...propTypes,
  css: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default BaseCircle
