import * as express from 'express'

const server = express()

server.get('/hello', (_, res) => {
  res.status(200).send('Hello').end()
})

server.get('/timestamp', (_, res) => {
  res.status(200).send(`Date: ${Date.now()}`).end()
})

const PORT = process.env.PORT || 6000
server.listen(PORT, () => {
  console.log('Simple apollo server')
  console.log('Press Ctrl+C to quit.')
})

export default server
