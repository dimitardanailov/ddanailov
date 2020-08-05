import styled from 'styled-components'

import MainFooter from '@ddanailov/components/MainFooter'
import MobileSidebar from '@ddanailov/components/Sidebar/Mobille'
import MobileMenu from '@ddanailov/components/Menu/Mobile'

import {footerSize} from 'styles/_sizes'

const PageHolder = styled.section`
  position: relative;

  display: block;
  padding: 0 0.75rem;
  padding-bottom: ${footerSize};
`

const MainMobileLayout = Page => () => (
  <>
    <MobileSidebar />

    <MobileMenu />

    <PageHolder>
      <Page />

      <MainFooter />
    </PageHolder>
  </>
)

export default MainMobileLayout
