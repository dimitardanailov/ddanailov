import App from '@ddanailov/components/App'
import SEO from '@ddanailov/utils/seo'

import ShutterStockEditor from '@ddanailov/demos/ShutterStockEditor'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = ''
  _seo.canonicalTag = '/demo-shutter-stock'
  _seo.description = ''

  return _seo
}

function ShutterStockLayoutDemoPage() {
  return (
    <App seo={pageSEO()}>
      <ShutterStockEditor />
    </App>
  )
}

export default ShutterStockLayoutDemoPage
