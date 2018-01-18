import React, { Component } from 'react'
import getDebugColor from './getDebugColor'
import getStyle from './getStyle'
import getClassName from './getClassName'
import getDecoratedChildren from './getDecoratedChildren'
import { propTypes, defaultProps } from './props'
import Col from './Col'
import { ROW } from './constants'

class Row extends Component {
  constructor(props) {
    super(props)
    this.debugColor = getDebugColor()
    this.gapStyleProperty = 'marginTop'
    this.type = ROW
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

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row
