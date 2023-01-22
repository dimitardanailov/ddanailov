import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

import seoInfo from 'data/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = seoInfo.demoCoingecko.title
  _seo.canonicalTag = '/defi-resources'
  _seo.description = seoInfo.demoCoingecko.description

  return _seo
}

const CoinGeckoPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return <App seo={pageSEO()}></App>
}

export default CoinGeckoPage
