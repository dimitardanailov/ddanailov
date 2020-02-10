import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

import styled from 'styled-components'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

const MainLayout = Page => () => (
  <Container>
    <MainHeader />
    <Page />
    <MainFooter />
  </Container>
)

export default MainLayout
