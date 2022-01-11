import {getTransactions} from './services/polygon'
;(async () => {
  const address1 = '0x28985676bb58bBd7683C60AC92E00002ea515AB2'
  const transactions1 = await getTransactions(address1)
  console.log('result', address1, transactions1)

  // const address2 = '0x7F092e65C688a509737FcD8D0998dD12208f5297'
  // const transactions2 = await getTransactions(address2)
  // console.log('result', address2, transactions2)

  const address3 = '0x5241d2a90CB8A459b6a209E5D0C2a66842F9916C'
  const transactions3 = await getTransactions(address3)
  console.log('result', address3, transactions3)
})()
