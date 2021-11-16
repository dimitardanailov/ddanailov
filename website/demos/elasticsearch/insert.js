'use strict'

const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: 'http://localhost:9200'})

// Tables - users, policy
// Action - users.create, users.update, policy.create, policy.destroy

const indexes = [
  'audit-users-create',
  'audit-users-update',
  'audit-users-destroy',

  'audit-policy-create',
  'audit-policy-destroy',
]

async function run() {
  // Let's start by indexing some data
  const response = await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.',
    },
  })
  console.log('response', response)

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.',
    },
  })

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.',
    },
  })

  // We need to force an index refresh at this point, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({index: 'game-of-thrones'})
}

run().catch(console.log)
