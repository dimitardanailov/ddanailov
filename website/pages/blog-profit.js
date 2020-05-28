import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'From zero to 25000+ euro profit less than an year'
  _seo.canonicalTag = '/blog/profit'
  _seo.description = ''

  return _seo
}

const ProfitPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@pages/01-profit/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@pages/01-profit/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default ProfitPage
