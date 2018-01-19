import { Children } from 'react'

const isChildrenOfType = (type, children) =>
  Children.toArray(children).reduce(
    (memo, item) => memo || item.type === type,
    false
  )

export default isChildrenOfType
