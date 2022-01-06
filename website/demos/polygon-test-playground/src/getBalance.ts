import {getBalance} from './services/polygon'
;(async () => {
  const address1 = '0x28985676bb58bBd7683C60AC92E00002ea515AB2'
  const balance1 = await getBalance(address1)
  printResult(address1, balance1)

  const address2 = '0x7F092e65C688a509737FcD8D0998dD12208f5297'
  const balance2 = await getBalance(address2)
  printResult(address2, balance2)

  const address3 = '0x5241d2a90CB8A459b6a209E5D0C2a66842F9916C'
  const balance3 = await getBalance(address3)
  printResult(address3, balance3)
})()

function printResult(address: string, balance: string) {
  const response = `{address:} -> ${address} | {balance:} -> ${balance}`
  console.log(response)
}
