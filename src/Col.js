import React, { Component } from 'react'
import getDebugColor from './getDebugColor'
import getStyle from './getStyle'
import getClassName from './getClassName'
import getDecoratedChildren from './getDecoratedChildren'
import { propTypes, defaultProps } from './props'
import { COL } from './constants'

class Col extends Component {
  constructor(props) {
    super(props)
    this.debugColor = getDebugColor()
    this.gapStyleProperty = 'marginStart'
    this.type = COL
  }
  render() {
    const { debugColor, gapStyleProperty, type } = this

    return (
      <div
        style={getStyle({ ...this.props, debugColor, gapStyleProperty, type })}
        className={getClassName({ ...this.props, type: Col })}
        onScroll={this.props.onScroll}
      >
        {getDecoratedChildren({ ...this.props, type })}
      </div>
    )
  }
}

Col.propTypes = propTypes
Col.defaultProps = defaultProps

export default Col
