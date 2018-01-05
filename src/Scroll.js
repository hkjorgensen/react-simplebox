import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getDebugColor from './getDebugColor'
import {
  STYLE_SCROLL,
  STYLE_FLEX,
  STYLE_FLEX_GROW,
  HORIZONTAL,
  STYLE_SCROLL_HORIZONTAL,
  VERTICAL,
  STYLE_SCROLL_VERTICAL,
  STYLE_FLEX_COLUMN,
  BOTH,
  STYLE_SCROLL_BOTH,
} from './constants'

class Scroll extends Component {
  getClassName() {
    const { direction, className } = this.props
    const classNames = [
      STYLE_SCROLL,
      STYLE_FLEX,
      STYLE_FLEX_GROW,
      STYLE_FLEX_COLUMN,
    ]

    if (direction === HORIZONTAL) {
      classNames.push(STYLE_SCROLL_HORIZONTAL)
    }

    if (direction === VERTICAL) {
      classNames.push(STYLE_SCROLL_VERTICAL)
    }

    if (direction === BOTH) {
      classNames.push(STYLE_SCROLL_BOTH)
    }

    if (className && className !== '') {
      classNames.push(className)
    }

    return classNames.join(' ')
  }

  render() {
    const { onScroll, children } = this.props

    return (
      <div className={this.getClassName()} onScroll={onScroll}>
        {children}
      </div>
    )
  }
}

Scroll.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf([HORIZONTAL, VERTICAL, BOTH]),
  onScroll: PropTypes.func,
  className: PropTypes.string,
}

Scroll.defaultProps = {
  onScroll: null,
  children: null,
  direction: VERTICAL,
  className: null,
}

export default Scroll
