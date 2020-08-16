import * as express from 'express'

const server = express()

server.get('/hello', (_, res) => {
  res.status(200).send('Hello, test').end()
})

server.get('/timestamp', (_, res) => {
  res.status(200).send(`Date: ${Date.now()}`).end()
})

server.get('/cached', (_, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).send(`Date: ${Date.now()}`).end()
})

const PORT = process.env.PORT || 6000
server.listen(PORT, () => {
  console.log('Simple apollo server')
  console.log('Press Ctrl+C to quit.')
})

export default server
