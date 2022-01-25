import {monitorTransaction} from './services/algorand'
import TransactionStatusCheck from './interfaces/TransactionStatusCheck'
;(async () => {
  const validTxHash = 'YOHDRRHAKGMPPILQRJOVL2YGW6DEJZWYZKC7H3VUINJXTPJQG6ZQ'
  const validAddress: TransactionStatusCheck = {
    transaction_hash: validTxHash,
  }

  const validResponse = await monitorTransaction(validAddress)
  console.log('validTxHash', validResponse)
})()
