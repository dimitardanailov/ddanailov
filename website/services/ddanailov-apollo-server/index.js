'use strict'

import express from 'express'

const app = express()

app.get('/', (_, res) => {
  res.status(200).send('Hello, world!').end()
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Simple apollo server')
  console.log('Press Ctrl+C to quit.')
})

module.exports = app
