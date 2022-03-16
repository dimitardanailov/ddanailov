import axios from 'axios'

const COINGECKO_API = 'https://api.coingecko.com/api/v3'

;(async () => {
  const coingeckoIds = ['ALGORAND', 'bitcoin', 'matic-network', 'CARDANO']
  const {data} = await axios.get(`${COINGECKO_API}/simple/price`, {
    params: {
      ids: coingeckoIds.join(','),
      vs_currencies: 'usd',
    },
  })

  console.log('data', data)
})()
