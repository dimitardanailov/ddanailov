'use strict'

const row = process.argv[2]

const records = row.split(',')

function formatting(record) {
  const regExpInteger = /^\d+$/

  if (regExpInteger.test(record)) {
    return parseInt(record)
  }

  if (record === 'NULL') {
    return 'NULL'
  }

  return `'${record}'`
}

const output = records.map(record => {
  const formattedRecord = formatting(record)

  return formattedRecord
})

console.log(output.join(','))
