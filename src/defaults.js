import { PropTypes } from 'react'

export const contextTypes = {
  betterReactSpinkit: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.number
  })
}

export const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export const color = '#333'
export const size = 24
