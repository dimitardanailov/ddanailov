import PropTypes from 'prop-types'

import Theme from '@ddanailov/components/Theme'
import MainHeader from '@ddanailov/components/MainHeader'
import SEO from '@ddanailov/utils/seo'

function App({children, seo}) {
  return (
    <>
      <MainHeader seo={seo} />
      <Theme>{children}</Theme>
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.instanceOf(SEO).isRequired,
}

export default App
