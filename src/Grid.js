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
  FILL,
  DEBUG_OUTLINE,
  DEBUG_BACKGROUND,
  STYLE_RELATIVE,
  STYLE_FLEX,
  STYLE_FLEX_GROW,
  STYLE_FLEX_AUTO,
  STYLE_FLEX_ROW,
  STYLE_FLEX_COLUMN,
} from './constants'

class Grid extends Component {
  getClassName() {
    const { children, className, height, relative } = this.props
    const classNames = [STYLE_FLEX]

    if (relative) {
      classNames.push(STYLE_RELATIVE)
    }

    if (height === FIT) {
      classNames.push(STYLE_FLEX_AUTO)
    } else {
      classNames.push(STYLE_FLEX_GROW)
    }

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
        testId={this.props['data-test-id']}
      >
        {this.getChildrenWithProps()}
      </Baseline>
    )
  }
}

Grid.propTypes = {
  className: PropTypes.string,
  debug: PropTypes.bool,
  debugType: PropTypes.oneOf([DEBUG_OUTLINE, DEBUG_BACKGROUND]),
  dir: PropTypes.oneOf([LTR, RTL]),
  forceGridSize: PropTypes.bool,
  gap: PropTypes.number,
  gridHelper: PropTypes.oneOf(['baseline', 'baseline2', 'modular', 'modular2']),
  gridSize: PropTypes.number,
  height: PropTypes.oneOf([FILL, FIT]),
  relative: PropTypes.bool,
  width: PropTypes.oneOf([FILL, FIT]),
}

Grid.defaultProps = {
  className: null,
  debug: false,
  debugType: 'background',
  dir: LTR,
  forceGridSize: false,
  gap: null,
  gridHelper: null,
  gridSize: 8,
  height: FIT,
  relative: false,
  width: FILL,
}

export default Grid
