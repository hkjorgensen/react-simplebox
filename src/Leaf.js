import React, { Component } from 'react'
import { STYLE_FLEX, STYLE_FLEX_GROW, STYLE_FLEX_COLUMN } from './constants'

const className = [STYLE_FLEX, STYLE_FLEX_COLUMN].join(' ')

export default class Leaf extends Component {
  render() {
    const { children } = this.props
    return <div data-leaf className={className}>{children}</div>
  }
}
