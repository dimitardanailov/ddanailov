import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Ready to start your next project with me?'
  _seo.canonicalTag = '/contacts'
  _seo.description =
    'Finding a good software engineer can be a painful task. I can assure you that if you work with me once, you will always work with me for these kind of projects!'

  return _seo
}

const ConctactsPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@contacts/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@contacts/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default ConctactsPage
