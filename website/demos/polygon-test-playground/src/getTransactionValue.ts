import {getTransferValue} from './services/polygon'
;(async () => {
  const txHash1 =
    '0xc74ee41006531bc751e7f8540346ff33a1b6e1c3f368512d82aded56f07a86a8'
  const transaction1 = await getTransferValue(txHash1)
  console.log('value:', transaction1)

  const txHash2 =
    '0x2a8b72df663d533fde254621e2949f7915a46f3a74766db574dda212c80c7a3b'
  const transaction2 = await getTransferValue(txHash2)
  console.log('value:', transaction2)
})()
