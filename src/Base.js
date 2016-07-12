import { default as React, PropTypes } from 'react'
import { default as Fade } from 'react-fade'
import { default as minifyCss } from 'minify-css-string'

const Base = ({ css, children, fadeIn, ...props }) =>
  <span {...props}>
    <style children={minifyCss(css)} />
    <Choose>
      <When condition={fadeIn}>
        <Fade in>
          {children}
        </Fade>
      </When>
      <Otherwise>
        {children}
      </Otherwise>
    </Choose>
  </span>

Base.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string.isRequired,
  fadeIn: PropTypes.bool
}

Base.defaultProps = {
  fadeIn: true
}

export default Base
