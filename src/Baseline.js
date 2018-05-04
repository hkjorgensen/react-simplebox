import React from 'react'
import PropTypes from 'prop-types'

const LTR = 'ltr'
const RTL = 'rtl'
const DEFAULT_SIZE = 8

const baseline = (size = DEFAULT_SIZE) => ({
  backgroundColor: 'transparent',
  backgroundSize: `${size}px ${size}px`,
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, rgba(0,0,0,0) 0)',
})

const baseline2 = (size = DEFAULT_SIZE) => ({
  backgroundColor: 'transparent',
  backgroundSize: `${2 * size}px ${2 * size}px`,
  backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0) 50%
  )`,
})

const modular2 = (size = DEFAULT_SIZE) => ({
  backgroundColor: 'transparent',
  backgroundSize: `${2 * size}px ${2 * size}px`,
  backgroundImage: `linear-gradient(45deg,
      rgba(0,0,0,0.2) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0,0,0,0.2) 75%,
      rgba(0,0,0,0.2)
    ), linear-gradient(45deg,
      rgba(0,0,0,0.2) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0,0,0,0.2) 75%,
      rgba(0,0,0,0.2)
    )
  `,
  backgroundPosition: `0 0, ${size}px ${size}px`,
})

const modular = (size = DEFAULT_SIZE) => ({
  backgroundColor: 'transparent',
  backgroundSize: `${size}px ${size}px`,

  backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.2) 1px,
      rgba(0, 0, 0, 0) 1px
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.2) 1px,
      rgba(0, 0, 0, 0) 1px
    )
  `,
})

const GRID_TYPES = {
  baseline,
  baseline2,
  modular,
  modular2,
}

const Baseline = ({ children, className, type, size, dir, testId }) => {
  const style = type ? GRID_TYPES[type](size) : null

  return (
    <div
      className={className}
      style={style}
      dir={dir}
      data-test-id={testId}
      data-simplebox-root
    >
      {children}
    </div>
  )
}

Baseline.propTypes = {
  dir: PropTypes.oneOf([LTR, RTL]),
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(Object.keys(GRID_TYPES)),
  testId: PropTypes.string,
}

Baseline.defaultProps = {
  dir: null,
  className: null,
  size: DEFAULT_SIZE,
  type: null,
  testId: null,
}

export default Baseline
