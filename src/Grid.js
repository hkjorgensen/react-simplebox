import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import isChildrenOfType from './helpers/isChildrenOfType'
import getConfig from './getConfig'
import Baseline from './Baseline'
import { Row } from './RowAndCol'
import {
  LTR,
  RTL,
  ROW,
  COL,
  FIT,
  BLOCK,
  DEBUG_OUTLINE,
  DEBUG_BACKGROUND,
  STYLE_RELATIVE,
  STYLE_FLEX,
  STYLE_FLEX_GROW,
  STYLE_FLEX_ROW,
  STYLE_FLEX_COLUMN,
} from './constants'

class Grid extends Component {
  getClassName() {
    const { children, className } = this.props
    const classNames = [STYLE_RELATIVE, STYLE_FLEX, STYLE_FLEX_GROW]

    classNames.push(
      isChildrenOfType(Row, children) ? STYLE_FLEX_COLUMN : STYLE_FLEX_ROW
    )

    if (className && className !== '') {
      classNames.push(className)
    }

    return classNames.join(' ')
  }

  getChildrenWithProps() {
    const {
      children,
      dir,
      debug,
      debugType,
      gap,
      forceGridSize,
      gridSize,
      height,
      width,
    } = this.props
    const flow = isChildrenOfType(Row, children) ? ROW : COL
    const isParentRowAndFit = height === FIT
    const isParentColAndFit = width === FIT

    const base = {
      dir,
      debug,
      debugType,
      gap,
      forceGridSize,
      gridSize,
      justify: null,
      flow,
      isParentRowAndFit,
      isParentColAndFit,
    }

    const firstConfig = getConfig({ ...base, isFirst: true })
    const nextConfig = getConfig({ ...base, isFirst: false })

    return Children.map(children, (child, index) => {
      return cloneElement(child, {
        config: index === 0 ? firstConfig : nextConfig,
      })
    })
  }

  render() {
    const { gridHelper, dir, gridSize } = this.props

    return (
      <Baseline
        dir={dir}
        className={this.getClassName()}
        type={gridHelper}
        size={gridSize}
      >
        {this.getChildrenWithProps()}
      </Baseline>
    )
  }
}

Grid.propTypes = {
  gridSize: PropTypes.number,
  gridHelper: PropTypes.oneOf(['baseline', 'baseline2', 'modular', 'modular2']),
  forceGridSize: PropTypes.bool,
  dir: PropTypes.oneOf([LTR, RTL]),
  debug: PropTypes.bool,
  debugType: PropTypes.oneOf([DEBUG_OUTLINE, DEBUG_BACKGROUND]),
  gap: PropTypes.number,
  className: PropTypes.string,
  height: PropTypes.oneOf([BLOCK, FIT]),
  width: PropTypes.oneOf([BLOCK, FIT]),
}

Grid.defaultProps = {
  height: FIT,
  width: BLOCK,
  gridSize: 8,
  gridHelper: null,
  forceGridSize: false,
  dir: LTR,
  debug: false,
  debugType: 'background',
  gap: null,
  className: null,
}

export default Grid
