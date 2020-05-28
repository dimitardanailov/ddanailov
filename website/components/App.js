import MainHeader from '@ddanailov/components/MainHeader'

import PropTypes from 'prop-types'

import styled from 'styled-components'

import SEO from '@ddanailov/utils/seo'

const Container = styled.section`
  position: relative;

  display: block;
  min-height: 100%;
  width: 100%;
`

function App({children, seo}) {
  return (
    <Container>
      <MainHeader seo={seo} />
      {children}
    </Container>
  )
}

App.propTypes = {
  canonicalTag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  seo: PropTypes.node.isRequired,
}

export default App
