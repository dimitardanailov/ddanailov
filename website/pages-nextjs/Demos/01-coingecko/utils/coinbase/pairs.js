export function btcPairIsSupportedByCoinbase(cryptoSymbol) {
  const supportedCoins = [
    'ALGORAND',
    'matic-network',
    'CARDANO',
    'ethereum',
    'solana',
    'dogecoin',
    'cosmos',
    'chainlink',
    'stellar',
    'decentraland',
    'uniswap',
    'aave',
    'maker',
    'avalanche-2',
  ]

  return comparing(supportedCoins, cryptoSymbol)
}

export function ethPairIsSupportedByCoinbase(cryptoSymbol) {
  const supportedCoins = [
    'bitcoin',
    'CARDANO',
    'solana',
    'chainlink',
    'decentraland',
  ]

  return comparing(supportedCoins, cryptoSymbol)
}

function comparing(supportedCoins, cryptoSymbol) {
  const coins = supportedCoins.map(coin => {
    return coin.toLowerCase()
  })

  return coins.includes(cryptoSymbol.toLowerCase())
}
