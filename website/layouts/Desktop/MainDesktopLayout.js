import MainHeader from '@ddanailov/components/MainHeader'
import MainFooter from '@ddanailov/components/MainFooter'

const MainDesktopLayout = Page => () => (
  <>
    <MainHeader />

    <Page />

    <MainFooter />
  </>
)

export default MainDesktopLayout
