import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Danailov Consulting: Javascript Consultant and Remote architect'
  _seo.canonicalTag = '/'
  _seo.description =
    'My skills are: React, Web Components, Cloud (Amazon, Google Cloud, Azure), Project leadership and mentorship'

  return _seo
}

const Homepage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@homepage/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@homepage/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default Homepage
