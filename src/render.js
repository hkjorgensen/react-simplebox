import React from 'react'
import getStyle from './getStyle'
import getClassName from './getClassName'
import getDecoratedChildren from './getDecoratedChildren'

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

  return (
    <div style={style} className={className} onScroll={onScroll}>
      {children}
    </div>
  )
}

export default render
