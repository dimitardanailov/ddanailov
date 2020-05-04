import MainHeader from '@ddanailov/components/MainHeader'

import PropTypes from 'prop-types'

function App({canonicalTag, children}) {
  return (
    <>
      <MainHeader canonicalTag={canonicalTag} />
      {children}
    </>
  )
}

App.propTypes = {
  canonicalTag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
