const colors = require('./data.json')

const quantization = calcQuantization(colors)
console.log('quantization', quantization)

function calcQuantization(colors) {
  const map = new Map()

  colors.forEach(color => {
    if (map.has(color.doubleColorId)) {
      const item = map.get(color.doubleColorId)
      item.predominant = item.predominant + color.predominant
    } else {
      map.set(color.doubleColorId, color)
    }
  })

  let arr = []

  map.forEach(item => {
    arr.push(item)
  })

  const output = arr.sort((a, b) => {
    return b.predominant - a.predominant
  })

  return output
}
