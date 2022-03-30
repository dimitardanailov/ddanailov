import AtomService from './services/AtomService'
;(async () => {
  const service = new AtomService()

  // Valid transaction:
  const txHash1 =
    'EE1B8599C5D7929B2CEBC794956D79E26CDCF44480CAD94BDC72CE8EF477D76C'
  const transaction1 = await service.getTransferValue(txHash1)
  console.log('value:', transaction1)

  // Invalid transaction:
  const txHash2 =
    '2F2ED53B53DB643DC60DA82875D63CCCDF785A6F2849AF9632F73D5CA5C7CDF7'
  const transaction2 = await service.getTransferValue(txHash2)
  console.log('value:', transaction2)
})()
