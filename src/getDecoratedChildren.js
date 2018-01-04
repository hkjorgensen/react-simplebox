import { Children, isValidElement, cloneElement } from 'react'
import getConfig from './getConfig'

const getDecoratedChildren = ({ children, gap, config, type, justify }) => {
  const firstConfig = getConfig({
    ...config,
    gap,
    justify,
    flow: type,
    isFirst: true,
  })
  const nextConfig = getConfig({
    ...config,
    gap,
    justify,
    flow: type,
    isFirst: false,
  })

  return Children.map(children, (child, index) => {
    return isValidElement(child)
      ? cloneElement(child, { config: index === 0 ? firstConfig : nextConfig })
      : child
  })
}

export default getDecoratedChildren
