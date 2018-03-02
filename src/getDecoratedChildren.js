import { Children, isValidElement, cloneElement } from 'react'
import getConfig from './getConfig'
import { ROW, COL, VERTICAL, HORIZONTAL, BOTH } from './constants'

const getDecoratedChildren = ({
  children,
  gap,
  config,
  typeOfSelf,
  scroll,
  justify,
  isLeaf,
  size,
}) => {
  let isParentRowAndFit = null
  let isParentColAndFit = null

  if (typeOfSelf === ROW) {
    if (size === 'fit' || scroll === VERTICAL || scroll === BOTH) {
      isParentRowAndFit = true
    } else if (size !== 0) {
      isParentRowAndFit = false
    }
  }

  if (isParentRowAndFit === null) {
    isParentRowAndFit = config.isParentRowAndFit
  }

  if (typeOfSelf === COL) {
    if (size === 'fit' || scroll === HORIZONTAL || scroll === BOTH) {
      isParentColAndFit = true
    } else if (size !== 0) {
      isParentColAndFit = false
    }
  }

  if (isParentColAndFit === null) {
    isParentColAndFit = config.isParentColAndFit
  }

  const firstConfig = getConfig({
    ...config,
    gap,
    justify,
    isParentScroll: scroll,
    isParentRowAndFit,
    isParentColAndFit,
    flow: typeOfSelf,
    isFirst: true,
  })

  const nextConfig = getConfig({
    ...firstConfig,
    isFirst: false,
  })

  return Children.map(children, (child, index) => {
    if (isLeaf || !isValidElement(child)) {
      return child
    }

    return cloneElement(child, {
      config: index === 0 ? firstConfig : nextConfig,
    })
  })
}

export default getDecoratedChildren
