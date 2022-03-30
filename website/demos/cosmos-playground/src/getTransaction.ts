import AtomService from './services/AtomService'
;(async () => {
  const service = new AtomService()

  const txHash1 =
    'EE1B8599C5D7929B2CEBC794956D79E26CDCF44480CAD94BDC72CE8EF477D76C'
  const transaction1 = await service.getTransaction(txHash1)
  console.log('result1', transaction1)

  const txHash2 =
    '2F2ED53B53DB643DC60DA82875D63CCCDF785A6F2849AF9632F73D5CA5C7CDF7'
  const transaction2 = await service.getTransaction(txHash2)
  console.log('result2', transaction2)

  const txHash3 =
    '991321B0318D3620FBA8943EA4515D82F4843E6AD960FB373AA30117FE5F17E0'
  const transaction3 = await service.getTransaction(txHash3)
  console.log('result3', transaction3)
})()
