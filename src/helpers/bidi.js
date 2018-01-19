const LTR = 'ltr'
const RTL = 'rtl'
const CONVERTIONS = {
  [LTR]: {
    paddingStart: 'paddingLeft',
    paddingEnd: 'paddingRight',
    marginStart: 'marginLeft',
    marginEnd: 'marginRight',
  },
  [RTL]: {
    paddingStart: 'paddingRight',
    paddingEnd: 'paddingLeft',
    marginStart: 'marginRight',
    marginEnd: 'marginLeft',
  },
}

const bidi = (style = {}, dir = LTR) => {
  if (dir !== LTR && dir !== RTL) {
    throw new Error(
      `bidi argument 'dir' can only be '${LTR}' or '${RTL}'. Received: ${dir}`
    )
  }

  const keys = Object.keys(style)
  const newStyle = keys.reduce((memo, key) => {
    const newKey = CONVERTIONS[dir][key] || key

    memo[newKey] = style[key]
    return memo
  }, {})

  return newStyle
}

export default bidi
