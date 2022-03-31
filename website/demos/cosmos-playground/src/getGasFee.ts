import AtomService from './services/AtomService'
;(async () => {
  const service = new AtomService()
  const gasFee = await service.getGasFee()
  const defaultSendFee = await service.getDefaultGasPrice()

  console.log('result', gasFee)
  console.log('defaultSendFee', defaultSendFee)
})()
