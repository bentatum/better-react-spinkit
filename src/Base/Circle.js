
import Base from '.'
import React from 'react'
import { range } from 'lodash'
import PropTypes from 'prop-types'
import { animate, defaults, preside } from '../util'
import Prefixer from 'inline-style-prefixer'
const prefixer = new Prefixer()

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

const applyRotate = (index) => prefixer.prefix({
  transform: `rotate(${rotate[index]}deg)`
})

const innerCircle = {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
}

const BaseCircle = ({ color, defaultSize, name, size, ...props }, { betterReactSpinkit = {} }) => {
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
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
                backgroundColor: preside(color, betterReactSpinkit.color, defaults.color)
              }}
            />
          </div>
        )}
      </div>
    </Base>
  )
}

BaseCircle.contextTypes = defaults.contextTypes

BaseCircle.propTypes = {
  color: PropTypes.string,
  css: PropTypes.string.isRequired,
  defaultSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default BaseCircle
