import {useEffect, useState} from 'react'
import axios from 'node_modules/axios/index'
import {FixedSizeList} from 'react-window'
import PageHeaderContainer from './PageHeaderContainer'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'

import styled from 'styled-components'

const COINGECKO_API = 'https://api.coingecko.com/api/v3'

const columnDimensions = {
  coin: {
    width: '8%',
  },
  usd: {
    price: {
      width: '8.5%',
    },
    priceChanged: {
      width: '14%',
    },
  },
  btc: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '24.25%',
    },
  },
  eth: {
    price: {
      width: '10.5%',
    },
    priceChanged: {
      width: '24.25%',
    },
  },
}

const Table = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  border: 0.1rem solid #000;
  margin-top: 0.5rem;
`

const TableHeader = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  padding: 1rem 0;

  background-color: #000;
  color: #fff;
  justify-content: flex-start;
`

const TableCell = styled.div`
  position: relative;

  overflow: hidden;
  width: ${props => props.width};
  padding: 0 1rem;
`

const TableRow = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #cecece;
  justify-content: flex-start;
`

const CoinCell = styled(TableCell)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 120px;
`

const PriceUSDCell = styled(TableCell)`
  min-width: 90px;
`

const CryptoIcon = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 0.5rem;
`

const colorDown = '#e15241'
const colorUp = '#4eaf0a'

const ColorInfo = styled.span`
  color: ${props => props.color};
`

const CustomAlert = styled(Alert)`
  position: relative;
`

function PriceComparing({percent, children}) {
  let color
  if (percent > 0) {
    color = colorUp
  } else {
    color = colorDown
  }

  return <ColorInfo color={color}>{children}</ColorInfo>
}

function renderRow({data, index, style}) {
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

  const icon = `https://ddanailov.dev/_next/static/crypto/${item.cryptoCurrency}.svg`

  return (
    <TableRow key={index} style={style}>
      <CoinCell width={columnDimensions.coin.width}>
        <CryptoIcon src={icon} />
        {item.cryptoCurrency}
      </CoinCell>
      <PriceUSDCell width={columnDimensions.usd.price.width}>
        {price}
      </PriceUSDCell>
      <TableCell width={columnDimensions.usd.priceChanged.width}>
        <PriceComparing percent={usdChange}>
          {usdChange} % / {formatter.format(oldPriceUSD)}
        </PriceComparing>
      </TableCell>
      <TableCell width={columnDimensions.btc.price.width}>{item.btc}</TableCell>
      <TableCell width={columnDimensions.btc.priceChanged.width}>
        <PriceComparing percent={parseFloat(item.eth_24h_change)}>
          {parseFloat(item.btc_24h_change).toFixed(2)} % ({oldPriceBTC})
        </PriceComparing>
      </TableCell>
      <TableCell width={columnDimensions.eth.price.width}>{item.eth}</TableCell>
      <TableCell width={columnDimensions.eth.priceChanged.width}>
        <PriceComparing percent={parseFloat(item.eth_24h_change)}>
          {parseFloat(item.eth_24h_change).toFixed(2)} % ({oldPriceETH})
        </PriceComparing>
      </TableCell>
    </TableRow>
  )
}

function CoinGeckoPage() {
  const [prices, setPrices] = useState([])
  const [
    priceListNotifacationIsVisible,
    setPriceListNotifacationIsVisible,
  ] = useState(false)

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
          setPriceListNotifacationIsVisible(true)

          setTimeout(() => {
            setPriceListNotifacationIsVisible(false)
          }, 3000)
        }
      })
  }

  return (
    <>
      <PageHeaderContainer refreshMethod={getPrices} />
      <Collapse in={priceListNotifacationIsVisible}>
        <CustomAlert severity="success">
          The list with crypto coins has a new version !
        </CustomAlert>
      </Collapse>
      <Table>
        <TableHeader>
          <CoinCell width={columnDimensions.coin.width}>Coin</CoinCell>
          <PriceUSDCell width={columnDimensions.usd.price.width}>
            USD
          </PriceUSDCell>
          <TableCell width={columnDimensions.usd.priceChanged.width}>
            Old price USD
          </TableCell>
          <TableCell width={columnDimensions.btc.price.width}>BTC</TableCell>
          <TableCell width={columnDimensions.btc.priceChanged.width}>
            Old price BTC
          </TableCell>
          <TableCell width={columnDimensions.eth.price.width}>ETH</TableCell>
          <TableCell width={columnDimensions.eth.priceChanged.width}>
            Old price ETH
          </TableCell>
        </TableHeader>
        <FixedSizeList
          height={870}
          itemSize={57.95}
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
