import {monitorTransaction} from './services/polygon'
import TransactionStatusCheck from './interfaces/TransactionStatusCheck'
;(async () => {
  const validTxHash =
    '0x2a8b72df663d533fde254621e2949f7915a46f3a74766db574dda212c80c7a3b'
  const validAddress: TransactionStatusCheck = {
    transaction_hash: validTxHash,
  }

  const validResponse = await monitorTransaction(validAddress)
  console.log('validTxHash', validResponse)

  const invalidTxHash =
    '0x773635c6c83d086997ce0786c2af8d1492aead60303e117e7b092d07f8dbd0e6'
  const invalidAddress: TransactionStatusCheck = {
    transaction_hash: invalidTxHash,
  }

  const invalidResponse = await monitorTransaction(invalidAddress)
  console.log('invalidTxHash', invalidResponse)
})()
