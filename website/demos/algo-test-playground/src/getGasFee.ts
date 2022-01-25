import {getGasFee} from './services/algorand'
;(async () => {
  const gasFee = await getGasFee()

  console.log('result', gasFee)
})()
