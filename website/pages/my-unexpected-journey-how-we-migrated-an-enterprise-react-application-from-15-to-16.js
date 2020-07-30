import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title =
    'My unexpected journey: How we migrated an enterprise react application from 15.6 to 16.10'
  _seo.canonicalTag =
    '/my-unexpected-journey-how-we-migrated-an-enterprise-react-application-from-15-to-16'
  _seo.type = 'article'
  _seo.description =
    "The main challenge for each enterprise project is the infinity battle between stakeholders features and source code improvements. If you're too busy with stakeholders features soon or later the source code will be a bottleneck!!!"

  _seo.setImagePath(
    'https://ddanailov.dev/my-unexpected-journey-how-we-migrated-an-enterprise-react-application-from-15-to-16.png',
  )

  return _seo
}

const Page = () => {
  const [device, setDevice] = React.useState('')

  useEffect(() => {
    const tempDevice = detectDevice()
    setDevice(tempDevice)
  }, [device])

  return (
    <App seo={pageSEO()}>
      <Switch
        device={device}
        MobilePage={dynamic(
          import('@pages/04-react-migration/_Mobile'),
          PageLoader,
        )}
        DesktopPage={dynamic(
          import('@pages/04-react-migration/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default Page
