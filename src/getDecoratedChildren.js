import { Children, isValidElement, cloneElement } from 'react'
import getConfig from './getConfig'
import Row from './Row'
import Col from './Col'

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
    if (!isValidElement(child)) { return child }
    if (child.type === Row || child.type === Col) {
      return cloneElement(child, { config: index === 0 ? firstConfig : nextConfig })
    }

    return child
  })
}

export default getDecoratedChildren
