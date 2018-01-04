import bidi from './helpers/bidi'
import {
  COL,
  ROW,
  AUTO,
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
  type,
}) => {
  const { gap, isFirst, dir, flow, gridSize, forceGridSize } = config
  const gridMultiplier = forceGridSize ? gridSize : 1
  const style = {}

  if (config.debug) {
    if (config.debugType === DEBUG_OUTLINE) {
      style.boxShadow = `inset 0 0 0 2px ${debugColor}`
    }

    if (config.debugType === DEBUG_BACKGROUND) {
      style.background = debugColor
    }
  }

  if (gap && !isFirst && justify !== SPACE_BETWEEN) {
    style[gapStyleProperty] = gap * gridMultiplier
  }

  if (size) {
    let value = size === AUTO ? AUTO : size * gridMultiplier

    if (flow === ROW && type === ROW) {
      style.height = value
    }

    if (flow === ROW && type === COL) {
      style.width = value
    }

    if (flow === COL && type == ROW) {
      style.height = value
    }

    if (flow === COL && type === COL) {
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
