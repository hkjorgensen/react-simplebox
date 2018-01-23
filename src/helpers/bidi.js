const LTR = 'ltr'
const RTL = 'rtl'
const StartRegExp = /Start/
const EndRegExp = /End/

const bidi = (style = {}, dir = LTR) => {
  if (dir !== LTR && dir !== RTL) {
    throw new Error(
      `bidi argument 'dir' can only be '${LTR}' or '${RTL}'. Received: ${dir}`
    )
  }

  const StartReplaceWith = dir === LTR ? 'Left' : 'Right'
  const EndReplaceWith = dir === LTR ? 'Right' : 'Left'
  const newStyle = Object.keys(style).reduce((memo, key) => {
    const newKey = key
      .replace(StartRegExp, StartReplaceWith)
      .replace(EndRegExp, EndReplaceWith)

    memo[newKey] = style[key]
    return memo
  }, {})

  return newStyle
}

export default bidi
