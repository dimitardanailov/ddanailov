import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

function SEO() {
  return (
    <>
      <title>Front-end, Nodejs and Go remote consultant</title>

      <meta
        name="description"
        content="Passion to work with React, Nodejs, Go, Amazon Web Services, Azure, Google Cloud"
      />
    </>
  )
}

const AboutPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App canonicalTag="/about" SEO={<SEO />}>
      <Switch
        device={device}
        MobilePage={dynamic(import('@about/_Mobile'), PageLoader)}
        DesktopPage={dynamic(import('@about/_Desktop'), PageLoader)}
      />
    </App>
  )
}

export default AboutPage
