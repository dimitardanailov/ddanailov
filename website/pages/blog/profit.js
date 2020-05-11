import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

function SEO() {
  return (
    <>
      <title>From zero to 25000+ euro profit less than an year</title>

      <meta name="description" content="" />
    </>
  )
}

const ProfitPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App canonicalTag="/blog/profit" SEO={<SEO />}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@pages/01-profit/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@pages/01-profit/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default ProfitPage
