import MainHeader from '@ddanailov/components/MainHeader'

import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

function App({canonicalTag, children}) {
  return (
    <Container>
      <MainHeader canonicalTag={canonicalTag} />
      {children}
    </Container>
  )
}

App.propTypes = {
  canonicalTag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
