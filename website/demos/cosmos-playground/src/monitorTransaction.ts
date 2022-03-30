import AtomService from './services/AtomService'
import TransactionStatusCheck from './interfaces/TransactionStatusCheck'
;(async () => {
  const service = new AtomService()

  // Valid transaction:
  const validTxHash =
    'EE1B8599C5D7929B2CEBC794956D79E26CDCF44480CAD94BDC72CE8EF477D76C'
  const validAddress: TransactionStatusCheck = {
    transaction_hash: validTxHash,
  }

  const validResponse = await service.monitorTransaction(validAddress)
  console.log('validTxHash', validResponse)

  // Invalid transaction:
  const invalidTxHash =
    '2F2ED53B53DB643DC60DA82875D63CCCDF785A6F2849AF9632F73D5CA5C7CDF7'
  const invalidAddress: TransactionStatusCheck = {
    transaction_hash: invalidTxHash,
  }
  const invalidResponse = await service.monitorTransaction(invalidAddress)
  console.log('invalidTxHash', invalidResponse)
})()
