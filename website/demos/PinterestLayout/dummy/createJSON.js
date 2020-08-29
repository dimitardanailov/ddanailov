'use strict'

const fs = require('fs')
const config = require('../config')

function generateRandomHeight() {
  const {max, min} = config.item.height
  const diff = max - min
  const random = Math.floor(Math.random() * diff) + min

  return random
}

function getItems() {
  const items = []
  for (let i = 0; i < config.maxItems; i++) {
    const height = generateRandomHeight()
    items.push({
      // Prevents code mutations
      id: `${i}-${config.item.width}-${height}`,
      width: config.item.width,
      height: height,
    })
  }

  return items
}

function pagination() {
  const pages = {}
  for (let i = 0; i < config.pages; i++) {
    const key = `page${i}`
    pages[key] = {
      items: getItems(),
    }
  }

  return pages
}

const pages = pagination()

let data = JSON.stringify(pages)
fs.writeFileSync('./records.json', data)
