import React, { Component } from 'react'
import getDebugColor from './getDebugColor'
import { propTypes, defaultProps } from './props'
import isChildrenOfType from './helpers/isChildrenOfType'
import render from './render'
import { ROW, COL } from './constants'

const getChildrenInfo = children => {
  const isChildrenRow = isChildrenOfType(Row, children)
  const isChildrenCol = isChildrenOfType(Col, children)
  const isLeaf = !isChildrenCol && !isChildrenRow

  return { isChildrenCol, isChildrenRow, isLeaf }
}

export class Col extends Component {
  constructor(props) {
    super(props)
    this.debugColor = getDebugColor()
    this.gapStyleProperty = 'marginStart'
    this.typeOfSelf = COL
  }
  render() {
    const { debugColor, gapStyleProperty, typeOfSelf } = this
    const { children } = this.props
    const { isChildrenRow, isChildrenCol, isLeaf } = getChildrenInfo(children)

    return render({
      props: this.props,
      debugColor,
      gapStyleProperty,
      typeOfSelf,
      isChildrenRow,
      isChildrenCol,
      isLeaf,
    })
  }
}

Col.propTypes = propTypes
Col.defaultProps = defaultProps

export class Row extends Component {
  constructor(props) {
    super(props)
    this.debugColor = getDebugColor()
    this.gapStyleProperty = 'marginTop'
    this.typeOfSelf = ROW
  }
  render() {
    const { debugColor, gapStyleProperty, typeOfSelf } = this
    const { children } = this.props
    const { isChildrenRow, isChildrenCol, isLeaf } = getChildrenInfo(children)

    return render({
      props: this.props,
      debugColor,
      gapStyleProperty,
      typeOfSelf,
      isChildrenRow,
      isChildrenCol,
      isLeaf,
    })
  }
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps
