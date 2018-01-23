const VALID_STYLES = {
  // Background
  backgroundColor: true,
  backgroundImage: true,
  backgroundPosition: true,
  backgroundSize: true,
  backgroundRepeat: true,
  backgroundOrigin: true,
  backgroundClip: true,
  backgroundAttachment: true,

  // BorderRadius
  borderRadius: true,
  borderTopStartRadius: true,
  borderTopEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomEndRadius: true,

  // Border
  border: true,
  borderTop: true,
  borderBottom: true,
  borderStart: true,
  borderEnd: true,

  // Outline
  outline: true,

  // BoxShadow
  boxShadow: true,
}

const getBoxStyle = (settings = {}) => {
  const style = {}

  Object.keys(settings).reduce((memo, key) => {
    if (VALID_STYLES[key]) {
      memo[key] = settings[key]
    } else {
      throw new Error(`BoxStyle property '${key}' is not valid.`)
    }

    return memo
  }, style)

  return style
}

export default getBoxStyle
