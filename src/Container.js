import { default as React, PropTypes } from 'react'
import { default as Fade } from 'react-fade'

const SpinKit = ({ css, children, fadeIn, ...props }) =>
  <span {...props}>
    <style dangerouslySetInnerHTML={{ __html: css.replace(/\n/g, '').replace(/\s\s+/g, ' ') }} />
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

SpinKit.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string.isRequired,
  fadeIn: PropTypes.bool
}

SpinKit.defaultProps = {
  fadeIn: true
}

export default SpinKit
