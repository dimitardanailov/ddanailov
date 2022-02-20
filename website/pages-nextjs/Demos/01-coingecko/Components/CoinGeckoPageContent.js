import {useEffect, useState} from 'react'
import axios from 'node_modules/axios/index'
import {FixedSizeList} from 'react-window'
import Slogan from '@ddanailov/styled/Slogan'

import styled from 'styled-components'

const COINGECKO_API = 'https://api.coingecko.com/api/v3'

const Table = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  border: 0.1rem solid #000;
`

const TableHeader = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  padding: 1rem;

  background-color: #000;
  color: #fff;
  justify-content: flex-start;
`

const TableRow = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  border: 1px solid #cecece;
  justify-content: flex-start;
  padding: 1rem;
`

const TableHeaderCell = styled.div`
  position: relative;

  width: 14.28%;
  overflow: hidden;
`

const TableRowCell = styled(TableHeaderCell)``

const CoinCell = styled(TableHeaderCell)`
  min-width: 120px;
  width: 8%;
`

const PriceUSDCell = styled(TableHeaderCell)`
  min-width: 90px;
  width: 6.5%;
`

function renderRow({data, index}) {
  const item = data.prices[index]
  const usdChange = parseFloat(item['usd_24h_change']).toFixed(2)
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const price = formatter.format(parseFloat(item.usd))

  const calcOldPrice = (currentPriceStr, changeStr) => {
    const currentPrice = parseFloat(currentPriceStr)
    const change = parseFloat(changeStr)

    let indexChange = Math.abs(change) / 100
    let sign = change > 0 ? -1 : 1

    return currentPrice + sign * (currentPrice * indexChange)
  }

  const oldPriceUSD = calcOldPrice(item.usd, item['usd_24h_change'])
  const oldPriceBTC = calcOldPrice(item.btc, item['btc_24h_change'])
  const oldPriceETH = calcOldPrice(item.eth, item['eth_24h_change'])

  return (
    <>
      <TableRow key={index}>
        <CoinCell>{item.cryptoCurrency}</CoinCell>
        <PriceUSDCell>{price}</PriceUSDCell>
        <TableRowCell>
          {usdChange} % / {formatter.format(oldPriceUSD)}
        </TableRowCell>
        <TableRowCell>{item.btc}</TableRowCell>
        <TableRowCell>
          {parseFloat(item.btc_24h_change).toFixed(2)} %
        </TableRowCell>
        <TableRowCell>{item.eth}</TableRowCell>
        <TableRowCell>
          {parseFloat(item.eth_24h_change).toFixed(2)} %
        </TableRowCell>
      </TableRow>
    </>
  )
}

function CoinGeckoPage() {
  const [prices, setPrices] = useState([])
  const coingeckoIds = [
    'ALGORAND',
    'bitcoin',
    'matic-network',
    'CARDANO',
    'ethereum',
    'solana',
    'dogecoin',
    'cosmos',
    'chainlink',
    'tron',
    'stellar',
    'decentraland',
    'uniswap',
    'aave',
    'maker',
  ]
  useEffect(() => {
    if (prices.length === 0) {
      getPrices()
    }
  }, [prices])

  const getPrices = () => {
    axios
      .get(`${COINGECKO_API}/simple/price`, {
        params: {
          ids: coingeckoIds.join(','),
          vs_currencies: 'btc,usd,eth',
          include_24hr_change: true,
          include_7d_change: true,
          include_last_updated_at: true,
        },
      })
      .then(body => {
        if (body.status === 200) {
          const keys = Object.keys(body.data)
          const coingeckoPrices = keys
            .map(key => {
              const item = body.data[key]
              return {
                cryptoCurrency: key,
                btc: item.btc,
                usd: item.usd,
                eth: item.eth,
                btc_24h_change: item.btc_24h_change,
                eth_24h_change: item.eth_24h_change,
                usd_24h_change: item.usd_24h_change,
              }
            })
            .sort((a, b) => {
              if (a.usd < b.usd) {
                return 1
              }

              if (a.usd > b.usd) {
                return -1
              }

              return 0
            })

          setPrices(coingeckoPrices)
        }
      })
  }

  return (
    <>
      <Slogan>Coins:</Slogan>
      <Table>
        <TableHeader>
          <CoinCell>Coin</CoinCell>
          <PriceUSDCell>USD</PriceUSDCell>
          <TableHeaderCell>24h</TableHeaderCell>
          <TableHeaderCell>BTC</TableHeaderCell>
          <TableHeaderCell>24h</TableHeaderCell>
          <TableHeaderCell>ETH</TableHeaderCell>
          <TableHeaderCell>24h</TableHeaderCell>
        </TableHeader>
        <FixedSizeList
          height={870}
          itemSize={prices.length}
          itemCount={prices.length}
          itemData={{
            prices,
          }}
        >
          {renderRow}
        </FixedSizeList>
      </Table>
    </>
  )
}

export default CoinGeckoPage
