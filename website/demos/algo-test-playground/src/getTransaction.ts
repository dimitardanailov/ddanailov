import {getTransaction} from './services/algorand'
;(async () => {
  const txHash1 = 'CSHYEYD7OJBW7EHCPKXKEXPFB2ZEHYNHTZ4WDNACDEZ5Y34G2SKQ'
  const transaction1 = await getTransaction(txHash1)
  console.log('result', transaction1)

  const txHash2 = 'YKR4S6U6OOCB7VSUOTBHFDIEKQBUL7E7FWVAAUMLX5W2PK7FQF4Q'
  const transaction2 = await getTransaction(txHash2)
  console.log('result', transaction2)
})()
