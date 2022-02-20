import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Trading from one crypto currency to another'
  _seo.canonicalTag = '/demo-coingecko'
  _seo.description = 'SOL to BTC, ETH to SOL, COSMOS to BTC'

  return _seo
}

const CoinGeckoPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@demos/01-coingecko/_Mobile'), PageLoader)}
        DesktopPage={dynamic(
          import('@demos/01-coingecko/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default CoinGeckoPage
