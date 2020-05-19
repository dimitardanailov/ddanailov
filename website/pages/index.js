import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

function SEO() {
  const title =
    'Danailov Consulting: Javascript Consultant and Remote architect'
  const description =
    'My skills are: React, Web Components, Cloud (Amazon, Google Cloud, Azure), Project leadership and mentorship'

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </>
  )
}

const Homepage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App canonicalTag="/" SEO={<SEO />}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@homepage/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@homepage/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default Homepage
