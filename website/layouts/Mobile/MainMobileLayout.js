import MainHeader from '@ddanailov/components/MainHeader'
import MainFooter from '@ddanailov/components/MainFooter'

const MainMobileLayout = Page => () => (
  <>
    <MainHeader />
    <Page />

    <MainFooter />
  </>
)

export default MainMobileLayout
