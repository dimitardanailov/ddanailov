import {getGasFee} from './services/polygon'
;(async () => {
  const gasFee = await getGasFee()

  console.log('result', gasFee)
})()
