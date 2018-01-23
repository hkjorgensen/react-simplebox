import bidi from './helpers/bidi'
import getBoxStyle from './getBoxStyle'
import {
  COL,
  ROW,
  FIT,
  DEBUG_OUTLINE,
  DEBUG_BACKGROUND,
  SPACE_BETWEEN,
} from './constants'

const getStyle = ({
  size,
  config,
  debugColor,
  justify,
  gapStyleProperty,
  paddingStart,
  paddingEnd,
  paddingTop,
  paddingBottom,
  typeOfSelf,
  boxStyle,
}) => {
  const { gap, isFirst, dir, flow, gridSize, forceGridSize } = config
  const gridMultiplier = forceGridSize ? gridSize : 1
  const style = !config.debug && boxStyle ? getBoxStyle(boxStyle) : {}

  if (config.debug) {
    if (config.debugType === DEBUG_OUTLINE) {
      style.boxShadow = `inset 0 0 0 2px ${debugColor}`
    }

    if (config.debugType === DEBUG_BACKGROUND) {
      style.backgroundColor = debugColor
    }
  }

  if (gap && !isFirst && justify !== SPACE_BETWEEN) {
    style[gapStyleProperty] = gap * gridMultiplier
  }

  if (size) {
    let value = size === FIT ? 'auto' : size * gridMultiplier

    if (flow === ROW && typeOfSelf === ROW) {
      style.height = value
    }

    if (flow === ROW && typeOfSelf === COL) {
      style.width = value
    }

    if (flow === COL && typeOfSelf == ROW) {
      style.height = value
    }

    if (flow === COL && typeOfSelf === COL) {
      size.width = value
    }
  }

  if (paddingStart) {
    style.paddingStart = paddingStart * gridMultiplier
  }

  if (paddingEnd) {
    style.paddingEnd = paddingEnd * gridMultiplier
  }

  if (paddingTop) {
    style.paddingTop = paddingTop * gridMultiplier
  }

  if (paddingBottom) {
    style.paddingBottom = paddingBottom * gridMultiplier
  }

  return bidi(style, dir)
}

export default getStyle
