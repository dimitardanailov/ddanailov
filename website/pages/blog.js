import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'

const BlogPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  const loading = {
    loading: () => <p>Loading...</p>,
  }

  return (
    <>
      <Switch
        device={device}
        MobilePage={dynamic(
          import('@ddanailov/components/Pages/blog/_Mobile'),
          loading,
        )}
        DesktopPage={dynamic(
          import('@ddanailov/components/Pages/blog/_Desktop'),
          loading,
        )}
      />
    </>
  )
}

export default BlogPage
