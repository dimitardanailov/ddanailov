import MainFooter from '../components/MainFooter'

import styled from 'styled-components'
import PageTemplate from './components/PageTemplate'
import PageHolder from './components/PageHolder'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

const MainLayout = Page => () => (
  <Container>
    <PageTemplate>
      <PageHolder>
        <Page />
      </PageHolder>
    </PageTemplate>

    <MainFooter />
  </Container>
)

export default MainLayout
