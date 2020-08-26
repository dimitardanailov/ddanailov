import dynamic from 'next/dynamic'

import React, {useEffect} from 'react'

import App from '@ddanailov/components/App'
import detectDevice from '@ddanailov/utils/devices/detectDevice'
import Switch from '@ddanailov/components/Pages/shared/devices/Switch'
import PageLoader from '@ddanailov/components/DynamicImports/PageLoader'

import SEO from '@ddanailov/utils/seo'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = 'Multi cursor editing (VSCode)'
  _seo.canonicalTag = '/multi-cursor-editing-vscode'
  _seo.type = 'article'
  _seo.description =
    'Ctrl+D selects the word at the cursor, or the next occurrence of the current selection.'

  _seo.setImagePath('https://ddanailov.dev/multicursor-editing-vscode.png')

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
          import('@pages/05-multi-cursor-editing-vscode/_Mobile'),
          PageLoader,
        )}
        DesktopPage={dynamic(
          import('@pages/05-multi-cursor-editing-vscode/_Desktop'),
          PageLoader,
        )}
      />
    </App>
  )
}

export default Page
