import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

function SEO() {
  return (
    <>
      <title>Material UI creating Custom List and List Item</title>

      <meta
        name="description"
        content="Material is a great library but sometimes we want to extend Material UI features"
      />
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
    <App canonicalTag="/blog/02-material-ui-custom-list" SEO={<SEO />}>
      <Switch
        device={device}
        MobilePage={dynamic(
          import('@pages/02-material-ui-custom-list/_Mobile'),
          PageLoader,
        )}
        DesktopPage={dynamic(
          import('@pages/02-material-ui-custom-list/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default ProfitPage
