import { default as React, PropTypes } from 'react'
import { default as Base } from '../Base'
import { animate, animationName, defaults, preside } from '../util'
const defaultSize = 20

const Pulse = ({ color, duration, scaleEnd, scaleStart, size, ...props }, { betterReactSpinkit = {} }) => {
  const name = animationName('pulse')
  const finalSize = preside(size, betterReactSpinkit.size, defaultSize)
  return (
    <Base
      css={`
        @-webkit-keyframes ${name} {
          0% {
            -webkit-transform: scale(${scaleStart});
          }
          100% {
            -webkit-transform: scale(${scaleEnd});
            opacity: 0;
          }
        }
        @keyframes ${name} {
          0% {
            -webkit-transform: scale(${scaleStart});
                    transform: scale(${scaleStart});
          }
          100% {
            -webkit-transform: scale(${scaleEnd});
                    transform: scale(${scaleEnd});
            opacity: 0;
          }
        }
      `}
      {...props}
    >
      <div
        style={{
          ...animate({ name, duration }),
          backgroundColor: preside(color, betterReactSpinkit.color, defaults.color),
          borderRadius: '100%',
          height: finalSize,
          width: finalSize
        }}
      />
    </Base>
  )
}

Pulse.contextTypes = defaults.contextTypes

Pulse.defaultProps = {
  duration: '1s',
  scaleEnd: 1,
  scaleStart: 0,
  size: defaultSize
}

Pulse.propTypes = {
  /**
   * The color of the spinner.
   */
  color: PropTypes.string,
  /**
   * The duration of the animation.
   */
  duration: PropTypes.string,
  fade: PropTypes.shape({
    duration: PropTypes.number,
    out: PropTypes.bool
  }),
  /**
   * End the animation with dots at x times the size value.
   */
  scaleEnd: PropTypes.number,
  /**
   * Start the animation with dots at x times the size value.
   */
  scaleStart: PropTypes.number,
  /**
   * The size of the spinner.
   */
  size: PropTypes.number
}

export default Pulse
