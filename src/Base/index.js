import { default as React, PropTypes } from 'react'
import { default as Fade } from 'react-fade'
import { default as minifyCss } from 'minify-css-string'

const Base = ({ css, children, fade, ...props }) =>
  <span {...props}>
    <style children={minifyCss(css)} />
    <Choose>
      <When condition={fade}>
        <Fade {...fade}>
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
  fade: PropTypes.shape({
    duration: PropTypes.number,
    out: PropTypes.bool
  })
}

Base.defaultProps = {
  fade: {
    duration: 1.5,
    out: false
  }
}

export default Base
