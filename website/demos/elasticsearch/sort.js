'use strict'

const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: 'http://localhost:9200'})

/**
 *
 */
async function read() {
  const {body} = await client.search({
    index: 'game-of-thrones',
    body: {
      sort: [
        {
          quote: {
            order: 'asc',
            type: 'text',
            fielddata: true,
          },
        },
      ],
      query: {
        // sort: [{quote: {order: 'desc'}}],
        match_all: {},
      },
    },
  })
  console.log(body.hits.hits)
}

read().catch(console.log)
