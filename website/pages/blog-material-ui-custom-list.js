import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Material UI creating Custom List and List Item'
  _seo.canonicalTag = '/blog/02-material-ui-custom-list'
  _seo.description =
    'Material is a great library but sometimes we want to extend Material UI features'

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
