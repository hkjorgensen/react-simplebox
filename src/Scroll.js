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
  BOTH,
  STYLE_SCROLL_BOTH,
} from './constants'

class Scroll extends Component {
  getClassName() {
    const { direction } = this.props
    const classNames = [STYLE_SCROLL, STYLE_FLEX, STYLE_FLEX_GROW]

    if (direction === HORIZONTAL) {
      classNames.push(STYLE_SCROLL_HORIZONTAL)
    }

    if (direction === VERTICAL) {
      classNames.push(STYLE_SCROLL_VERTICAL)
    }

    if (direction === BOTH) {
      classNames.push(STYLE_SCROLL_BOTH)
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
}

Scroll.defaultProps = {
  onScroll: null,
  children: null,
  direction: VERTICAL,
}

export default Scroll
