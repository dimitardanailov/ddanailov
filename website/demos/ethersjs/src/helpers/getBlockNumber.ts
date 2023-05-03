async function getBlockNumber(provider) {
  const blockNumber = await provider.getBlockNumber()
  console.log('blockNumber', blockNumber)
}

export default getBlockNumber
