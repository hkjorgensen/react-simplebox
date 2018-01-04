import random from 'lodash/random'

const getDebugColor = () =>
  `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.6)`

export default getDebugColor
