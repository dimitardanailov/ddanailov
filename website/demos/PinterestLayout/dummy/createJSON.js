'use strict'

const fs = require('fs')

const config = {
  maxItems: 50,
  width: 200,
  maximumHeight: 399,
  mimimumHeight: 50,
}

function generateRandomHeight() {
  const diff = config.maximumHeight - config.mimimumHeight
  const random = Math.floor(Math.random() * diff) + config.mimimumHeight

  return random
}

function getItems() {
  const items = []
  for (let i = 0; i < config.maxItems; i++) {
    const height = generateRandomHeight()
    items.push({
      // Prevents code mutations
      id: `${i}-${config.width}-${height}`,
      width: config.width,
      height: height,
    })
  }

  return items
}

const records = {
  items: getItems(),
}

let data = JSON.stringify(records)
fs.writeFileSync('./records.json', data)
