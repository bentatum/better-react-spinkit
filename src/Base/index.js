
import React from 'react'
import PropTypes from 'prop-types'
import minifyCss from 'minify-css-string'

const Base = ({ css, children, ...props }) =>
  <span {...props}>
    <style children={minifyCss(css)} />
    {children}
  </span>

Base.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string.isRequired
}

export default Base
