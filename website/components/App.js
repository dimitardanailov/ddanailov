import MainHeader from '@ddanailov/components/MainHeader'

import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
  position: relative;

  display: block;
  min-height: 100%;
  width: 100%;
`

function App({canonicalTag, children, SEO}) {
  return (
    <Container>
      <MainHeader canonicalTag={canonicalTag} SEO={SEO} />
      {children}
    </Container>
  )
}

App.propTypes = {
  canonicalTag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  SEO: PropTypes.node.isRequired,
}

export default App
