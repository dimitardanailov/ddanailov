async function getBlockNumber(provider) {
  const blockNumber = await provider.getBlockNumber()
  console.log('blockNumber', blockNumber)

  return blockNumber
}

export default getBlockNumber
