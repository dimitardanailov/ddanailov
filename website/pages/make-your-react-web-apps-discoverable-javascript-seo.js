import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Make your React web apps discoverable - JavaScript SEO'
  _seo.canonicalTag = '/make-your-react-web-apps-discoverable-javascript-seo'
  _seo.type = 'article'
  _seo.description =
    'Single page are not fancy word in our days. Single page are SEO are important components for the sustainable bussines.'

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
        MobilePage={dynamic(import('@pages/03-react-seo/_Mobile'), PageLoader)}
        DesktopPage={dynamic(
          import('@pages/03-react-seo/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default ProfitPage
