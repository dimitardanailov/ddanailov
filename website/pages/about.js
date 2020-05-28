import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Remote consultant with technology stack: React, Nodejs and Go'
  _seo.canonicalTag = '/about'
  _seo.description =
    'Passion to work with React, Nodejs, Go, Amazon Web Services, Azure, Google Cloud'

  return _seo
}

const AboutPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@about/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@about/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default AboutPage
