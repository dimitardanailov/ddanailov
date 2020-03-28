import dynamic from 'next/dynamic'

import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

import styled from 'styled-components'
import PageTemplate from './components/PageTemplate'
import PageHolder from './components/PageHolder'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

const Sidebar = dynamic(() => import('../components/Sidebar'))

const MainLayout = Page => () => (
  <Container>
    <MainHeader />

    <PageTemplate>
      <Sidebar />

      <PageHolder>
        <Page />
      </PageHolder>
    </PageTemplate>

    <MainFooter />
  </Container>
)

export default MainLayout
