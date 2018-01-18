import { Children, isValidElement, cloneElement } from 'react'
import getConfig from './getConfig'

const getDecoratedChildren = ({
  children,
  gap,
  config,
  typeOfSelf,
  scroll,
  justify,
  isLeaf,
}) => {
  const firstConfig = getConfig({
    ...config,
    gap,
    justify,
    isParentScroll: scroll,
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
