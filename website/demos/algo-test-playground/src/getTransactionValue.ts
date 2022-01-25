import {getTransferValue} from './services/algorand'
;(async () => {
  const txHash1 = 'CSHYEYD7OJBW7EHCPKXKEXPFB2ZEHYNHTZ4WDNACDEZ5Y34G2SKQ'
  const transaction1 = await getTransferValue(txHash1)
  console.log('value:', transaction1)

  const txHash2 = 'YKR4S6U6OOCB7VSUOTBHFDIEKQBUL7E7FWVAAUMLX5W2PK7FQF4Q'
  const transaction2 = await getTransferValue(txHash2)
  console.log('value:', transaction2)
})()
