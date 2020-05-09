import dynamic from 'next/dynamic'

import ThanksPageContent from '@thanks/Components/ThanksPageContent'
import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'
import DesktopMenu from '@ddanailov/components/Menu/Desktop'

const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const ThanksPage = () => (
  <PageHolder>
    <DesktopMenu />

    <ThanksPageContent />

    <MainFooter />
  </PageHolder>
)

export default ThanksPage
