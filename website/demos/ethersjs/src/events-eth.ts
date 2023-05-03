import {Contract} from 'ethers'

import provider from './config/etherium/provider'
import {getBlockNumber} from './helpers'

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns(uint)',
]

// DAI Contract
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new Contract(address, ERC20_ABI, provider)

;(async () => {
  await getBlockNumber(provider)

  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()

  console.log(`\nReading from ${address}\n`)
  console.log(`Name: ${name}`)
  console.log(`Symbol: ${symbol}`)
  console.log(`Total Supply: ${totalSupply}\n`)

  const balance = await contract.balanceOf(
    '0x6c6Bc977E13Df9b0de53b251522280BB72383700',
  )

  console.log(`Balance Returned: ${balance}`)
})()
