import {
  SPACE_BETWEEN,
  START,
  CENTER,
  END,
  BOTH,
  VERTICAL,
  HORIZONTAL,
  ROW,
  COL,
  STYLE_RELATIVE,
  STYLE_FLEX,
  STYLE_FLEX_AUTO,
  STYLE_FLEX_GROW,
  STYLE_FLEX_GROW_SCROLL,
  STYLE_FLEX_COLUMN,
  STYLE_FLEX_ROW,
  STYLE_FLEX_JUSTIFY_BETWEEN,
  STYLE_FLEX_JUSTIFY_START,
  STYLE_FLEX_JUSTIFY_CENTER,
  STYLE_FLEX_JUSTIFY_END,
  STYLE_FLEX_ALIGN_CENTER,
  STYLE_SCROLL,
  STYLE_SCROLL_BOTH,
  STYLE_SCROLL_VERTICAL,
  STYLE_SCROLL_HORIZONTAL,
} from './constants'

const getClassName = ({
  isChildrenCol,
  size,
  gap,
  justify,
  relative,
  align,
  config,
  scroll,
}) => {
  const classNames = [STYLE_FLEX]

  classNames.push(isChildrenCol ? STYLE_FLEX_ROW : STYLE_FLEX_COLUMN)

  if (size || config.justify !== null || config.isParentScroll) {
    classNames.push(STYLE_FLEX_AUTO)
  } else {
    if (scroll) {
      classNames.push(STYLE_FLEX_GROW_SCROLL)
    } else {
      classNames.push(STYLE_FLEX_GROW)
    }
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

  if (scroll !== null) {
    classNames.push(STYLE_SCROLL)

    if (scroll === BOTH) {
      classNames.push(STYLE_SCROLL_BOTH)
    }

    if (scroll === VERTICAL) {
      classNames.push(STYLE_SCROLL_VERTICAL)
    }

    if (scroll === HORIZONTAL) {
      classNames.push(STYLE_SCROLL_HORIZONTAL)
    }
  }

  return classNames.join(' ')
}

export default getClassName
