import React from 'react'
import getStyle from './getStyle'
import getClassName from './getClassName'
import getDecoratedChildren from './getDecoratedChildren'
import Leaf from './Leaf'

const render = ({
  props,
  debugColor,
  gapStyleProperty,
  typeOfSelf,
  isChildrenRow,
  isChildrenCol,
  isLeaf,
}) => {
  const style = getStyle({ ...props, debugColor, gapStyleProperty, typeOfSelf })
  const className = getClassName({ ...props, isChildrenRow, isChildrenCol })
  const children = getDecoratedChildren({ ...props, typeOfSelf, isLeaf })
  const onScroll = props.onScroll

  if (isLeaf) {
    return (
      <div style={style} className={className} onScroll={onScroll}>
        <Leaf>{children}</Leaf>
      </div>
    )
  }

  return (
    <div style={style} className={className} onScroll={onScroll}>
      {children}
    </div>
  )
}

export default render
