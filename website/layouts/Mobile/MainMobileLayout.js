import styled from 'styled-components'

import MainHeader from '@ddanailov/components/MainHeader'
import MainFooter from '@ddanailov/components/MainFooter'
import MobileSidebar from '@ddanailov/components/Sidebar/Mobille'

const PageHolder = styled.section`
  position: relative;

  display: block;
  padding: 0 0.75rem;
  padding-bottom: 70px;
`

const MainMobileLayout = Page => () => (
  <>
    <MainHeader />

    <MobileSidebar />

    <PageHolder>
      <Page />

      <MainFooter />
    </PageHolder>
  </>
)

export default MainMobileLayout
