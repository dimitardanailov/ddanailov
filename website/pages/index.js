import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

const Homepage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App canonicalTag="/">
      <Switch
        device={device}
        MobilePage={dynamic(
          import('@ddanailov/components/Pages/homepage/_Mobile'),
          PageLoader,
        )}
        DesktopPage={dynamic(
          import('@ddanailov/components/Pages/homepage/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default Homepage
