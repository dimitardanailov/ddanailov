import {getTransferFee} from './services/algorand'
;(async () => {
  const txHash1 = 'CSHYEYD7OJBW7EHCPKXKEXPFB2ZEHYNHTZ4WDNACDEZ5Y34G2SKQ'
  const fee1 = await getTransferFee(txHash1)
  console.log('value:', fee1)

  const txHash2 = 'YKR4S6U6OOCB7VSUOTBHFDIEKQBUL7E7FWVAAUMLX5W2PK7FQF4Q'
  const fee2 = await getTransferFee(txHash2)
  console.log('value:', fee2)
})()
