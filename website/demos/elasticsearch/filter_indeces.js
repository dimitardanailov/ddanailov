'use strict'

const {Client} = require('@elastic/elasticsearch')
const client = new Client({node: 'http://localhost:9200'})

async function run() {
  const paramsIndexes = [
    'audit-transactions-outgoing-transfer-approval',
    'audit-users-2fa-*',
    'audit-users-password-*',
    'audit-customer-transaction-limits-*',
    'audit-wallet-transaction-limits-*',
    'audit-transactions-outgoing-transfer-approval',
    'audit-whitelisted-addresses-view',
    'audit-new-whitelisted-address-requests-create',
    'audit-transaction_rules-create',
  ]
  const {body} = await client.cat.indices({format: 'json'})
  const dbIndexes = body
    .map(record => {
      return record.index
    })
    .filter(record => {
      if (record.includes('audit')) {
        return record
      }
    })

  const validIndexes = paramsIndexes.filter(index => {
    if (index.includes('*')) {
      return index
    }

    return dbIndexes.indexOf(index) > -1
  })

  console.log(dbIndexes, validIndexes)
}

run().catch(console.log)
