import isChildrenOfType from './helpers/isChildrenOfType'
import {
  SPACE_BETWEEN,
  START,
  CENTER,
  END,
  STYLE_RELATIVE,
  STYLE_FLEX,
  STYLE_FLEX_AUTO,
  STYLE_FLEX_GROW,
  STYLE_FLEX_COLUMN,
  STYLE_FLEX_ROW,
  STYLE_FLEX_JUSTIFY_BETWEEN,
  STYLE_FLEX_JUSTIFY_START,
  STYLE_FLEX_JUSTIFY_CENTER,
  STYLE_FLEX_JUSTIFY_END,
  STYLE_FLEX_ALIGN_CENTER,
} from './constants'

const getClassName = ({
  children,
  size,
  type,
  gap,
  justify,
  relative,
  align,
  config,
}) => {
  const classNames = [STYLE_FLEX]

  classNames.push(
    isChildrenOfType(type, children) ? STYLE_FLEX_COLUMN : STYLE_FLEX_ROW,
  )

  if (size || config.justify !== null) {
    classNames.push(STYLE_FLEX_AUTO)
  } else {
    classNames.push(STYLE_FLEX_GROW)
  }

  if (relative) {
    classNames.push(STYLE_RELATIVE)
  }

  if (justify === SPACE_BETWEEN) {
    classNames.push(STYLE_FLEX_JUSTIFY_BETWEEN)
  }

  if (justify === START) {
    classNames.push(STYLE_FLEX_JUSTIFY_START)
  }

  if (justify === CENTER) {
    classNames.push(STYLE_FLEX_JUSTIFY_CENTER)
  }

  if (justify === END) {
    classNames.push(STYLE_FLEX_JUSTIFY_END)
  }

  if (align === CENTER) {
    classNames.push(STYLE_FLEX_ALIGN_CENTER)
  }

  return classNames.join(' ')
}

export default getClassName
