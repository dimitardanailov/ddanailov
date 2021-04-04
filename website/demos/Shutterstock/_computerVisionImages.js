const images = [
  './images/lions.jpeg',
  './images/nws-st-bengal-tiger.jpeg',
  './images/Kitchen-trends-2019-featured.jpeg',
  './images/3VeiQCKVdLtqfez9KLG8iT.jpeg',
  './images/bath-white.jpeg'
]

const random = Math.floor(Math.random() * images.length)
const image = images[random]

module.exports = image