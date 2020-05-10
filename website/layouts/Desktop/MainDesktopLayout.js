import dynamic from 'next/dynamic'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'

import {PageHolder} from '@ddanailov/styled/layouts/Desktop'

const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const MainDesktopLayout = Page => () => (
  <>
    <PageHolder>
      <DesktopMenu />
      <Page />
    </PageHolder>
    <MainFooter />
  </>
)

export default MainDesktopLayout
