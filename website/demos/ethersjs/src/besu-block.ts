import {ethers} from 'ethers'

import besuConfig from './config/besuConfig'

const provider = new ethers.JsonRpcProvider(besuConfig.uri)

;(async () => {
  const blockNumber = await provider.getBlockNumber()

  console.log('blockNumber', blockNumber)
})()
