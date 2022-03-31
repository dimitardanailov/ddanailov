import AtomService from './services/AtomService'
;(async () => {
  const service = new AtomService()
  const gasFee = service.getGasFee()

  console.log('result', gasFee)
})()
