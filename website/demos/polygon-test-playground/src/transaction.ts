import {transfer} from './services/polygon'
;(async () => {
  const senderPublicKey =
    'f6d6b4f111ead8937250dc64c12f7c5ef39c8e664a664477fb962c0fba631098'
  const toAddress = '0x5241d2a90CB8A459b6a209E5D0C2a66842F9916C'
  const amountWei = '10'
  const tokenCategory = ''
  const transactionId = ''
  const keystoreId = ''
  const signRequest = ''

  const gasFee = await transfer(
    senderPublicKey,
    toAddress,
    amountWei,
    tokenCategory,
    transactionId,
    keystoreId,
    signRequest,
  )

  console.log('result', gasFee)
})()
