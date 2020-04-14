import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/pages/shared/devices/Switch'

const Homepage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const fetchDevice = async () => {
      const tempDevice = await detectDevice()
      setDevice(tempDevice)
    }
    fetchDevice()
  }, [device])

  const loading = {
    loading: () => <p>Loading...</p>,
  }

  return (
    <>
      <Switch
        device={device}
        MobilePage={dynamic(
          import('@ddanailov/components/pages/homepage/_Mobile'),
          loading,
        )}
        DesktopPage={dynamic(
          import('@ddanailov/components/pages/homepage/_Desktop'),
          loading,
        )}
      />
    </>
  )
}

export default Homepage
