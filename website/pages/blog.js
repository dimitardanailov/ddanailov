import React, {useEffect} from 'react'

import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/pages/blog/Switch'

const BlogPage = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <>
      <Switch device={device} />
    </>
  )
}

export default BlogPage
