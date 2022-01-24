import {getBalance} from './services/algorand'
;(async () => {
  setTimeout(async function () {
    const address1 =
      'NNLTQS4O6OTH3AUZ7CIIQ5HYWVWSK7ZF3GHHMIKRDECCKQ2NNRLFUE4OVU'
    const balance1 = await getBalance(address1)
    printResult(address1, balance1)
  }, 1000)

  setTimeout(async function () {
    const address2 =
      'REYCTDA3AWAFPXTN5IEFFCA5LGCJN74RPKSJCFU3GTMZYXX2AWYJIZRGJY'
    const balance2 = await getBalance(address2)
    printResult(address2, balance2)
  }, 3000)

  setTimeout(async function () {
    const address3 =
      'OIGS7SXNAOP77NFEV2KM5CZRRVGKO56VONG6APO5JZF4JWDHEQKPJWGG6I'
    const balance3 = await getBalance(address3)
    printResult(address3, balance3)
  }, 5000)
})()

function printResult(address: string, balance: string) {
  const response = `{address:} -> ${address} | {balance:} -> ${balance}`
  console.log(response)
}
