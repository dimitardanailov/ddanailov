const images = [
  './images/dubai.png',
  './images/stock-photo-beautiful-view-on-dubai-downtown-skyline-dubai-united-arab-emirates-704369332.jpeg',
  './images/shutterstock_example.png',
  './images/lions.jpeg',
  './images/nws-st-bengal-tiger.jpeg',
  './images/Kitchen-trends-2019-featured.jpeg',
  './images/bathroom.jpeg',
  './images/bath-white.jpeg'
]

const random = Math.floor(Math.random() * images.length)
const image = images[random]

module.exports = image