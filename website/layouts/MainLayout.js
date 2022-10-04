import MainFooter from '../components/MainFooter'

import styled from 'styled-components'
import PageTemplate from './components/PageTemplate'
import PageHolder from './components/PageHolder'

import {onLCP, onFID, onCLS} from 'web-vitals'

const Container = styled.section`
  position: relative;

  min-height: 100%;
`

const Page = function () {
  onCLS(console.log)
  onFID(console.log)
  onLCP(console.log)

  return (
    <Container>
      <PageTemplate>
        <PageHolder>
          <Page />
        </PageHolder>
      </PageTemplate>

      <MainFooter />
    </Container>
  )
}

const MainLayout = Page

export default MainLayout
