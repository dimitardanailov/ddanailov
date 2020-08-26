import App from '@ddanailov/components/App'
import SEO from '@ddanailov/utils/seo'

import PinterestLayout from '@ddanailov/demos/PinterestLayout'

function pageSEO() {
  const _seo = new SEO()
  _seo.title = ''
  _seo.canonicalTag = '/demo'
  _seo.description = ''

  return _seo
}

function PinterestLayoutDemoPage() {
  return (
    <App seo={pageSEO()}>
      <PinterestLayout />
    </App>
  )
}

export default PinterestLayoutDemoPage
