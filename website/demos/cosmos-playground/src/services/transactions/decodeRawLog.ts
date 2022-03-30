export type AtomTransaction = {
  recipient: string
  sender: string
  amount: string
}

interface Event {
  type: string
  attributes: Array<Attribute>
}

interface Attribute {
  key: string
  value: string
}

function decodeRawLog(rawLog: string): AtomTransaction {
  const transaction: AtomTransaction = {
    recipient: '',
    sender: '',
    amount: '0',
  }

  const parsedLog = JSON.parse(rawLog)
  if (parsedLog.length === 0) {
    return transaction
  }

  const events = parsedLog[0]['events']
  const transfer = events.find(function (event: Event) {
    return (
      String(event.type) === 'transfer' && typeof event.attributes === 'object'
    )
  })

  if (!transfer) {
    return transaction
  }

  transfer.attributes.forEach(function (attribute: Attribute) {
    if (attribute.key === 'recipient') {
      transaction.recipient = attribute.value
    }

    if (attribute.key === 'sender') {
      transaction.sender = attribute.value
    }

    if (attribute.key === 'amount') {
      transaction.amount = attribute.value.replace('uatom', '')
    }
  })

  return transaction
}

export default decodeRawLog
